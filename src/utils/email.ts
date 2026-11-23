import emailjs from '@emailjs/browser';

// These should be replaced with real values from EmailJS account
const SERVICE_ID = 'service_ykyhjtp';
const TEMPLATE_ID = 'template_06q9r3m';
const PUBLIC_KEY = '5NQqm_U93Nz1fni8m';

export const sendEmail = async (templateParams: Record<string, any>) => {
    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
};
