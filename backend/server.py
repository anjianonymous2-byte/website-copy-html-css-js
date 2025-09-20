from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import asyncio
import httpx
import gspread
from google.oauth2.service_account import Credentials
import json

# Configure logging first
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = None
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "pending"

class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Email sending function
async def send_email(to_email: str, subject: str, body: str, is_html: bool = False):
    """Send email using SMTP (simple hosting mail approach)"""
    try:
        # Get SMTP configuration from environment
        smtp_server = os.environ.get('SMTP_SERVER', 'localhost')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_use_tls = os.environ.get('SMTP_USE_TLS', 'true').lower() == 'true'
        smtp_username = os.environ.get('SMTP_USERNAME')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        from_email = os.environ.get('FROM_EMAIL', 'info@spiromultiactivities.com')
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = from_email
        msg['To'] = to_email
        msg['Subject'] = subject
        
        if is_html:
            msg.attach(MIMEText(body, 'html'))
        else:
            msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        if smtp_username and smtp_password:
            # Use authenticated SMTP
            with smtplib.SMTP(smtp_server, smtp_port) as server:
                if smtp_use_tls:
                    server.starttls()
                server.login(smtp_username, smtp_password)
                server.send_message(msg)
                logger.info(f"✅ Email sent successfully to {to_email}")
        else:
            # Use local mail server (like WordPress hosting)
            with smtplib.SMTP(smtp_server, smtp_port) as server:
                server.send_message(msg)
                logger.info(f"✅ Email sent via local mail server to {to_email}")
        
        return True
        
    except Exception as e:
        logger.error(f"❌ Failed to send email to {to_email}: {str(e)}")
        # Fallback: log email details for manual processing
        logger.info(f"📧 EMAIL FALLBACK - To: {to_email}, Subject: {subject}")
        logger.info(f"📧 EMAIL BODY: {body}")
        return False

# Google Sheets integration function  
async def add_to_google_sheets(form_data: dict):
    """Add form data to Google Sheets using gspread"""
    try:
        # Load service account credentials
        creds_path = os.environ.get('GOOGLE_SERVICE_ACCOUNT_FILE')
        if not creds_path:
            logger.warning("Google Sheets integration disabled: GOOGLE_SERVICE_ACCOUNT_FILE not set")
            return False
            
        # Define the scope
        scope = ['https://spreadsheets.google.com/feeds',
                'https://www.googleapis.com/auth/drive']
        
        # Load credentials
        creds = Credentials.from_service_account_file(creds_path, scopes=scope)
        client = gspread.authorize(creds)
        
        # Open the spreadsheet
        sheet_id = os.environ.get('GOOGLE_SHEET_ID')
        if not sheet_id:
            logger.warning("Google Sheets integration disabled: GOOGLE_SHEET_ID not set")
            return False
            
        sheet = client.open_by_key(sheet_id).sheet1
        
        # Prepare row data
        row = [
            form_data.get('name', ''),
            form_data.get('email', ''),
            form_data.get('company', ''),
            form_data.get('message', ''),
            str(form_data.get('timestamp', ''))
        ]
        
        # Append the row
        sheet.append_row(row)
        logger.info("✅ Successfully added data to Google Sheets")
        return True
        
    except Exception as e:
        logger.error(f"❌ Google Sheets integration failed: {str(e)}")
        return False

@api_router.post("/contact", response_model=ContactForm)
async def submit_contact_form(input: ContactFormCreate):
    try:
        # Create contact form object
        contact_dict = input.dict()
        contact_obj = ContactForm(**contact_dict)
        
        # Save to database
        await db.contact_forms.insert_one(contact_obj.dict())
        
        # Prepare email content for user
        user_email_body = f"""
Dear {contact_obj.name},

Thank you for contacting SPIRO MULTI ACTIVITIES CO. LTD. We have received your inquiry and will get back to you within 24 hours.

Your Message Details:
Name: {contact_obj.name}
Email: {contact_obj.email}
Company: {contact_obj.company or 'Not provided'}
Message: {contact_obj.message}

Best regards,
SPIRO MULTI ACTIVITIES Team
info@spiromultiactivities.com
        """
        
        # Prepare email content for admin
        admin_email_body = f"""
New Contact Form Submission

Name: {contact_obj.name}
Email: {contact_obj.email}
Company: {contact_obj.company or 'Not provided'}
Message: {contact_obj.message}
Submitted: {contact_obj.timestamp}

Please respond to this inquiry promptly.
        """
        
        # Send emails
        user_email_sent = await send_email(
            contact_obj.email, 
            "Thank you for contacting SPIRO MULTI ACTIVITIES", 
            user_email_body
        )
        
        admin_email_sent = await send_email(
            "info@spiromultiactivities.com", 
            f"New Contact Form Submission from {contact_obj.name}", 
            admin_email_body
        )
        
        # Add to Google Sheets
        sheets_data = {
            "name": contact_obj.name,
            "email": contact_obj.email,
            "company": contact_obj.company or "",
            "message": contact_obj.message,
            "timestamp": contact_obj.timestamp
        }
        sheets_added = await add_to_google_sheets(sheets_data)
        
        # Update status
        if user_email_sent and admin_email_sent:
            contact_obj.status = "sent"
        else:
            contact_obj.status = "email_failed"
            
        # Update in database
        await db.contact_forms.update_one(
            {"id": contact_obj.id}, 
            {"$set": {"status": contact_obj.status}}
        )
        
        return contact_obj
        
    except Exception as e:
        logger.error(f"Contact form submission failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
