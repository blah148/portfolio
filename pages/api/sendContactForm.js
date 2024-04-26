import sgMail from '@sendgrid/mail';
require('dotenv').config({ path: '../../.env' });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  // Extract data from the request body including the subject
  const { fname, email, subject, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and Message are required' });
  }

  try {
    // Prepare the email message
    const msg = {
      to: 'mpark148@gmail.com', // Recipient email address
      from: 'no-reply@ploddings.com', // Your verified sender
      subject: subject || 'New Form Submission - Portfolio Website', // Use provided subject or default
      text: `You have received a new Portfolio contact form submission.\n\nFrom: ${fname || 'N/A'} (${email})\nSubject: ${subject || 'N/A'}\nMessage: ${message}`,
      html: `<h4>You have received a new contact form submission.</h4><p><strong>From:</strong> ${fname || 'N/A'} (${email})<br><strong>Subject:</strong> ${subject || 'N/A'}<br><strong>Message:</strong> ${message}</p>`,
    };
    // Send the email
    await sgMail.send(msg);
    res.status(200).json({ message: 'Contact form submission sent successfully.' });
  } catch (error) {
    console.error('Error in sending contact form submission:', error);
    if (error.response) {
      // Log the response body which might contain more information about what went wrong
      console.error('Error details:', error.response.body);
    }

    // Sending a detailed error message back to the client might help in debugging client-side issues as well
    res.status(500).json({
      error: 'Error in sending contact form submission',
      details: error.message,
      fullError: error.response ? error.response.body : 'No response body'
    });
  }
}

