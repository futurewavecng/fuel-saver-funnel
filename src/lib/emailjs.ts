import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_7t2iv9w';
const TEMPLATE_ID = 'template_070sjjn';
const PUBLIC_KEY = 'hmBnhMWXyJnHe1mio';

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  vehicleType: string;
  plugType: string;
  location: string;
}

export const sendLeadEmail = async (formData: LeadFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_name: 'Futurewave CNG Team',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      vehicle_type: formData.vehicleType,
      engine_type: formData.plugType,
      location: formData.location,
      submission_date: new Date().toLocaleString(),
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};