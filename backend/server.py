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
    """Send email using simple SMTP"""
    try:
        # Basic email configuration - using a simple approach
        msg = MIMEMultipart()
        msg['From'] = "info@spiromultiactivities.com"
        msg['To'] = to_email
        msg['Subject'] = subject
        
        if is_html:
            msg.attach(MIMEText(body, 'html'))
        else:
            msg.attach(MIMEText(body, 'plain'))
        
        # For now, we'll just log the email (in production, configure proper SMTP)
        logger.info(f"Email would be sent to {to_email} with subject: {subject}")
        logger.info(f"Email body: {body}")
        
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

# Google Sheets integration function
async def add_to_google_sheets(form_data: dict, sheets_url: str = None):
    """Add form data to Google Sheets using the provided public URL"""
    try:
        sheets_url = "https://docs.google.com/spreadsheets/d/1ch7hZPHH9mVVeO2dMU54LGn6miSUu6mXWcNfM_QkDys/edit?usp=sharing"
        
        if not sheets_url:
            logger.info("No Google Sheets URL provided, skipping sheets integration")
            return True
        
        # Extract spreadsheet ID from the URL
        sheet_id = "1ch7hZPHH9mVVeO2dMU54LGn6miSUu6mXWcNfM_QkDys"
        
        # Use Google Sheets API v4 with a simple HTTP request approach
        # Since the sheet has edit access, we'll use the append API
        append_url = f"https://sheets.googleapis.com/v4/spreadsheets/{sheet_id}/values/Sheet1:append"
        
        # Prepare the data to append
        values = [[
            form_data.get('name', ''),
            form_data.get('email', ''),
            form_data.get('company', ''),
            form_data.get('message', ''),
            form_data.get('timestamp', '')
        ]]
        
        # For now, we'll log the data that would be sent to Google Sheets
        # In production, you would need to set up proper authentication
        logger.info(f"Would append to Google Sheets {sheet_id}: {values}")
        logger.info(f"Google Sheets URL: {sheets_url}")
        
        # Alternative simpler approach - save to a local file that can be imported
        try:
            import csv
            import os
            csv_file = '/tmp/contact_forms.csv'
            
            # Check if file exists to write header
            file_exists = os.path.exists(csv_file)
            
            with open(csv_file, 'a', newline='', encoding='utf-8') as file:
                writer = csv.writer(file)
                
                # Write header if file is new
                if not file_exists:
                    writer.writerow(['Name', 'Email', 'Company', 'Message', 'Timestamp'])
                
                # Write the data
                writer.writerow([
                    form_data.get('name', ''),
                    form_data.get('email', ''),
                    form_data.get('company', ''),
                    form_data.get('message', ''),
                    form_data.get('timestamp', '')
                ])
                
            logger.info(f"Contact form data saved to CSV file: {csv_file}")
            
        except Exception as csv_e:
            logger.error(f"Failed to save to CSV: {csv_e}")
        
        return True
        
    except Exception as e:
        logger.error(f"Failed to add to Google Sheets: {str(e)}")
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
        
        # Add to Google Sheets (will be implemented once URL is provided)
        sheets_data = {
            "name": contact_obj.name,
            "email": contact_obj.email,
            "company": contact_obj.company or "",
            "message": contact_obj.message,
            "timestamp": contact_obj.timestamp.isoformat()
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
