import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_7t2iv9w';
const TEMPLATE_ID = 'template_070sjjn';
const PUBLIC_KEY = 'Ar15Ul4LHp78NCYim';

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
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      vehicle_type: formData.vehicleType,
      engine_type: formData.plugType,
      location: formData.location,
      message: `New CNG Guide Download Request
      
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Vehicle Type: ${formData.vehicleType}
Engine Type: ${formData.plugType}
Location: ${formData.location}
Submitted: ${new Date().toLocaleString()}`,
    };

    console.log('Sending email with data:', templateParams);
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};