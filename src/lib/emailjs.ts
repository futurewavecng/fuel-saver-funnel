export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  vehicleMakeModel: string;
  vehicleYear: string;
  plugType: string;
  location: string;
}

// Replace this with your Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyV4IlaTrLENIIxD6Pq_jk_DM8zYWxcXI1RUDatrjYcTPFwx_40jNsz4RlYuVDf2RFN7w/exec';

export const sendLeadEmail = async (formData: LeadFormData): Promise<boolean> => {
  try {
    console.log('Sending data to Google Sheets:', formData);
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    console.log('Google Sheets response:', result);
    
    return result.success === true;
  } catch (error) {
    console.error('Google Sheets Error:', error);
    return false;
  }
};