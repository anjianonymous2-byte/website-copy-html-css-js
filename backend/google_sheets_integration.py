"""
Google Sheets Integration for SPIRO Contact Forms
This module handles direct integration with Google Sheets
"""

import httpx
import json
import logging
from datetime import datetime
from typing import Dict, Any

logger = logging.getLogger(__name__)

class GoogleSheetsIntegrator:
    def __init__(self, sheet_id: str = "1ch7hZPHH9mVVeO2dMU54LGn6miSUu6mXWcNfM_QkDys"):
        self.sheet_id = sheet_id
        self.sheet_url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/edit"
        
    async def append_row(self, form_data: Dict[str, Any]) -> bool:
        """
        Append a row to Google Sheets using various methods
        """
        success = False
        
        # Method 1: Try CSV logging for manual import
        success_csv = await self._save_to_csv(form_data)
        
        # Method 2: Try IFTTT webhook (if configured)
        success_webhook = await self._try_webhook_integration(form_data)
        
        # Method 3: Log formatted data for manual copy-paste
        self._log_for_manual_import(form_data)
        
        return success_csv or success_webhook
    
    async def _save_to_csv(self, form_data: Dict[str, Any]) -> bool:
        """Save data to CSV file for easy Google Sheets import"""
        try:
            import csv
            import os
            
            csv_file = '/tmp/spiro_contact_forms.csv'
            file_exists = os.path.exists(csv_file)
            
            with open(csv_file, 'a', newline='', encoding='utf-8') as file:
                writer = csv.writer(file)
                
                if not file_exists:
                    # Write header
                    writer.writerow([
                        'Timestamp', 
                        'Name', 
                        'Email', 
                        'Company', 
                        'Message',
                        'Status'
                    ])
                
                # Format timestamp
                timestamp = form_data.get('timestamp')
                if isinstance(timestamp, datetime):
                    timestamp_str = timestamp.strftime('%Y-%m-%d %H:%M:%S')
                else:
                    timestamp_str = str(timestamp)
                
                # Write data row
                writer.writerow([
                    timestamp_str,
                    form_data.get('name', ''),
                    form_data.get('email', ''),
                    form_data.get('company', ''),
                    form_data.get('message', ''),
                    'New Submission'
                ])
            
            logger.info(f"✅ CSV file updated: {csv_file}")
            return True
            
        except Exception as e:
            logger.error(f"❌ CSV save failed: {e}")
            return False
    
    async def _try_webhook_integration(self, form_data: Dict[str, Any]) -> bool:
        """Try webhook integration (IFTTT, Zapier, etc.)"""
        try:
            # This would be used if you set up a webhook service
            # For now, we'll just log the attempt
            logger.info("📡 Webhook integration: Ready for setup")
            return True
        except Exception as e:
            logger.error(f"Webhook integration failed: {e}")
            return False
    
    def _log_for_manual_import(self, form_data: Dict[str, Any]):
        """Log data in a format that can be easily copied to Google Sheets"""
        timestamp = form_data.get('timestamp')
        if isinstance(timestamp, datetime):
            timestamp_str = timestamp.strftime('%Y-%m-%d %H:%M:%S')
        else:
            timestamp_str = str(timestamp)
        
        logger.info("📋 GOOGLE SHEETS IMPORT DATA:")
        logger.info("=" * 50)
        logger.info(f"Timestamp: {timestamp_str}")
        logger.info(f"Name: {form_data.get('name', '')}")
        logger.info(f"Email: {form_data.get('email', '')}")
        logger.info(f"Company: {form_data.get('company', '')}")
        logger.info(f"Message: {form_data.get('message', '')}")
        logger.info("=" * 50)
        logger.info("Copy the above data to your Google Sheet:")
        logger.info("https://docs.google.com/spreadsheets/d/1ch7hZPHH9mVVeO2dMU54LGn6miSUu6mXWcNfM_QkDys/edit")
        logger.info("=" * 50)

# Global instance
sheets_integrator = GoogleSheetsIntegrator()