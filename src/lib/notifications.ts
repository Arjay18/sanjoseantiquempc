import nodemailer from 'nodemailer';
import twilio from 'twilio';

// Email configuration
const emailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// SMS configuration
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export interface LoanApplicationData {
  id: string;
  name: string;
  pbNo: string;
  contactNo: string;
  loanType: string;
  loanAmount: number;
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: string;
  reviewedAt?: Date;
  notes?: string;
}

export interface ContactInquiryData {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
  createdAt: Date;
}

export async function sendLoanStatusEmail(application: LoanApplicationData) {
  try {
    const subject = `Loan Application ${application.status.charAt(0).toUpperCase() + application.status.slice(1)} - SJMPC`;
    const html = generateEmailTemplate(application);

    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@sjmpc.com',
      to: application.contactNo.includes('@') ? application.contactNo : `${application.pbNo}@sjmpc.com`, // Fallback email
      subject,
      html,
    };

    await emailTransporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${application.name} for loan application ${application.id}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export async function sendLoanStatusSMS(application: LoanApplicationData) {
  try {
    const message = generateSMSTemplate(application);

    await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: application.contactNo.startsWith('+63') ? application.contactNo : `+63${application.contactNo.replace(/^0/, '')}`,
    });

    console.log(`SMS sent successfully to ${application.name} for loan application ${application.id}`);
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
}

export async function sendLoanStatusNotifications(application: LoanApplicationData) {
  const notifications = [];

  try {
    // Send email notification
    await sendLoanStatusEmail(application);
    notifications.push('email');
  } catch (emailError) {
    console.error('Failed to send email notification:', emailError);
  }

  try {
    // Send SMS notification
    await sendLoanStatusSMS(application);
    notifications.push('sms');
  } catch (smsError) {
    console.error('Failed to send SMS notification:', smsError);
  }

  return notifications;
}

export async function sendContactNotification(inquiry: ContactInquiryData) {
  try {
    const subject = `New Contact Inquiry: ${inquiry.subject} - SJMPC`;
    const html = generateContactEmailTemplate(inquiry);

    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@sjmpc.com',
      to: process.env.ADMIN_EMAIL || 'sanjosempc@yahoo.com', // Admin email
      subject,
      html,
    };

    await emailTransporter.sendMail(mailOptions);
    console.log(`Contact notification email sent for inquiry ${inquiry.id} from ${inquiry.name}`);
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    throw error;
  }
}

function generateEmailTemplate(application: LoanApplicationData): string {
  const statusColor = application.status === 'approved' ? '#10B981' : application.status === 'rejected' ? '#EF4444' : '#F59E0B';
  const statusText = application.status.charAt(0).toUpperCase() + application.status.slice(1);

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Loan Application Status Update</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1F2937; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .status { background: ${statusColor}; color: white; padding: 15px; border-radius: 5px; text-align: center; font-size: 18px; font-weight: bold; margin: 20px 0; }
        .details { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SAN JOSE MULTI-PURPOSE COOPERATIVE</h1>
          <p>Loan Application Status Update</p>
        </div>

        <div class="content">
          <p>Dear ${application.name},</p>

          <div class="status">
            Your loan application has been ${statusText.toLowerCase()}.
          </div>

          <div class="details">
            <h3>Application Details:</h3>
            <p><strong>Application ID:</strong> ${application.id.slice(-8)}</p>
            <p><strong>PB Number:</strong> ${application.pbNo}</p>
            <p><strong>Loan Type:</strong> ${application.loanType}</p>
            <p><strong>Loan Amount:</strong> ₱${application.loanAmount.toLocaleString()}</p>
            ${application.reviewedBy ? `<p><strong>Reviewed By:</strong> ${application.reviewedBy}</p>` : ''}
            ${application.reviewedAt ? `<p><strong>Reviewed Date:</strong> ${new Date(application.reviewedAt).toLocaleDateString()}</p>` : ''}
            ${application.notes ? `<p><strong>Notes:</strong> ${application.notes}</p>` : ''}
          </div>

          ${application.status === 'approved' ?
            `<p>Congratulations! Your loan application has been approved. Please contact our office to proceed with the loan disbursement process.</p>` :
            application.status === 'rejected' ?
            `<p>We regret to inform you that your loan application has been declined. Please contact our office for more details or to discuss alternative options.</p>` :
            `<p>Your application is currently under review. We will notify you once a decision has been made.</p>`
          }

          <p>For any questions or concerns, please contact us:</p>
          <ul>
            <li>Phone: (036) 540-8209</li>
            <li>Email: sanjosempc@yahoo.com</li>
            <li>Address: Tradetown Funda-Dalipe, San Jose, Antique</li>
          </ul>

          <div class="footer">
            <p>This is an automated message from SJMPC. Please do not reply to this email.</p>
            <p>&copy; 2024 San Jose Multi-PURPOSE Cooperative. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateContactEmailTemplate(inquiry: ContactInquiryData): string {
  const inquiryTypeLabels: { [key: string]: string } = {
    general: 'General Inquiry',
    membership: 'Membership Information',
    loans: 'Loan Services',
    savings: 'Savings & Deposits',
    insurance: 'Insurance Products',
    complaint: 'Complaint/Feedback',
    other: 'Other'
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Inquiry</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1F2937; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .inquiry-details { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #3B82F6; }
        .message-box { background: #F3F4F6; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #10B981; }
        .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SAN JOSE MULTI-PURPOSE COOPERATIVE</h1>
          <p>New Contact Inquiry Received</p>
        </div>

        <div class="content">
          <p>A new contact inquiry has been submitted through the website. Here are the details:</p>

          <div class="inquiry-details">
            <h3>Contact Information:</h3>
            <p><strong>Name:</strong> ${inquiry.name}</p>
            <p><strong>Email:</strong> ${inquiry.email}</p>
            <p><strong>Phone:</strong> ${inquiry.phone}</p>
            <p><strong>Inquiry Type:</strong> ${inquiryTypeLabels[inquiry.inquiryType] || inquiry.inquiryType}</p>
            <p><strong>Subject:</strong> ${inquiry.subject}</p>
            <p><strong>Submitted:</strong> ${new Date(inquiry.createdAt).toLocaleString()}</p>
          </div>

          <div class="message-box">
            <h3>Message:</h3>
            <p>${inquiry.message.replace(/\n/g, '<br>')}</p>
          </div>

          <p>Please respond to this inquiry as soon as possible. You can reply directly to ${inquiry.email} or call ${inquiry.phone}.</p>

          <div class="footer">
            <p>This is an automated notification from the SJMPC website contact form.</p>
            <p>&copy; 2024 San Jose Multi-Purpose Cooperative. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateSMSTemplate(application: LoanApplicationData): string {
  const statusText = application.status.charAt(0).toUpperCase() + application.status.slice(1);

  return `SJMPC: Your loan application (${application.id.slice(-8)}) has been ${statusText.toLowerCase()}. Amount: ₱${application.loanAmount.toLocaleString()}. Contact us at (036) 540-8209 for details.`;
}
