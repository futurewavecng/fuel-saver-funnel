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
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwpUGnVqjSfLf_IePQyCijLAweswT-6QKkZXZwpQhU0AsvG_UPTS6LKriiYk24T-2g/exec';

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
    
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    if (!response.ok) {
      console.error('Response not OK:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response body:', errorText);
      return false;
    }
    
    const result = await response.json();
    console.log('Google Sheets response:', result);
    
    return result.success === true;
  } catch (error) {
    console.error('Google Sheets Error:', error);
    console.error('Error details:', error.message);
    return false;
  }
};