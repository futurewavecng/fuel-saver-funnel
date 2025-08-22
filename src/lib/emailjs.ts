export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  vehicleMakeModel: string;
  vehicleYear: string;
  plugType: string;
  location: string;
}

// Formspree endpoint URL
const FORMSPREE_URL = 'https://formspree.io/f/mdkdqgow';

export const sendLeadEmail = async (formData: LeadFormData): Promise<boolean> => {
  try {
    console.log('Sending data to Formspree:', formData);
    
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      console.error('Response not OK:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response body:', errorText);
      return false;
    }
    
    console.log('Formspree submission successful');
    return true;
  } catch (error) {
    console.error('Google Sheets Error:', error);
    console.error('Error details:', error.message);
    return false;
  }
};