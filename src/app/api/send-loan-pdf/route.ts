import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formData, email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email address is required' }, { status: 400 });
    }

    // Load the PDF template
    const pdfPath = path.join(process.cwd(), 'public', 'Form', 'NEW-Loan-Form-updated.pdf');
    const pdfBytes = fs.readFileSync(pdfPath);

    // Load the PDF document
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Get the first page
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Define field positions based on the PDF structure
    const fields = {
      // Basic Information
      name: { x: 90, y: 827, width: 200, height: 20 },
      pbNo: { x: 90, y: 810, width: 100, height: 20 },
      contactNo: { x: 355, y: 810, width: 150, height: 20 },
      address: { x: 100, y: 795, width: 300, height: 20 },
      loanType: { x: 355, y: 795, width: 150, height: 20 },
      loanAmount: { x: 468, y: 780, width: 100, height: 20 },
      term: { x: 80, y: 764, width: 50, height: 20 },
      purpose: { x: 350, y: 764, width: 300, height: 20 },

      // Promissory Note
      promissoryNoteAmount: { x: 120, y: 620, width: 100, height: 20 },
      promissoryNoteTerm: { x: 320, y: 620, width: 100, height: 20 },

      // Assignment of Deposit
      regularSavings: { x: 200, y: 550, width: 100, height: 20 },
      ultimaSavings: { x: 200, y: 530, width: 100, height: 20 },
      alkansyaSavings: { x: 200, y: 510, width: 100, height: 20 },
      timeDeposit: { x: 200, y: 490, width: 100, height: 20 },
      otherDeposits: { x: 200, y: 470, width: 100, height: 20 },
      shareCapital: { x: 200, y: 450, width: 100, height: 20 },

      // Monthly Disposable Income - Income
      memberIncome: { x: 250, y: 400, width: 100, height: 20 },
      spouseIncome: { x: 250, y: 380, width: 100, height: 20 },
      otherIncome: { x: 250, y: 360, width: 100, height: 20 },
      businessIncome: { x: 250, y: 340, width: 100, height: 20 },

      // Monthly Disposable Income - Expenses
      foodExpense: { x: 250, y: 300, width: 100, height: 20 },
      clothingExpense: { x: 250, y: 280, width: 100, height: 20 },
      shelterExpense: { x: 250, y: 260, width: 100, height: 20 },
      educationExpense: { x: 250, y: 240, width: 100, height: 20 },
      electricWaterExpense: { x: 250, y: 220, width: 100, height: 20 },
      helperExpense: { x: 250, y: 200, width: 100, height: 20 },
      loanRepaymentExpense: { x: 250, y: 180, width: 100, height: 20 },
      miscellaneousExpense: { x: 250, y: 160, width: 100, height: 20 },
    };

    // Fill in the form fields
    Object.keys(fields).forEach(fieldName => {
      if (formData && formData[fieldName] && formData[fieldName] !== '') {
        const field = fields[fieldName as keyof typeof fields];
        firstPage.drawText(String(formData[fieldName]), {
          x: field.x,
          y: field.y,
          size: 12,
          color: rgb(0, 0, 0),
        });
      }
    });

    // Serialize the PDF
    const pdfBytesFilled = await pdfDoc.save();

    // Send email with PDF attachment
    const sendResult = await resend.emails.send({
      from: "Loan Application <onboarding@resend.dev>",
      to: email,
      subject: "Your SJMPC Loan Application Form",
      html: `
        <h2>SJMPC Loan Application Submitted</h2>
        <p>Dear ${formData?.name || 'Valued Member'},</p>
        <p>Thank you for submitting your loan application to San Jose Multi-Purpose Cooperative (SJMPC).</p>
        <p>Your application has been received and is being processed. Please find attached your completed loan application form for your records.</p>
        <p><strong>Application Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${formData?.name || 'N/A'}</li>
          <li><strong>PB Number:</strong> ${formData?.pbNo || 'N/A'}</li>
          <li><strong>Loan Type:</strong> ${formData?.loanType || 'N/A'}</li>
          <li><strong>Loan Amount:</strong> ₱${formData?.loanAmount || 'N/A'}</li>
          <li><strong>Term:</strong> ${formData?.term || 'N/A'} months</li>
        </ul>
        <p>We will review your application and contact you soon with the next steps.</p>
        <p>Best regards,<br/>SJMPC Loan Processing Team</p>
      `,
      attachments: [
        {
          filename: `SJMPC_Loan_Application_${formData?.name?.replace(/\s+/g, '_') || 'Application'}.pdf`,
          content: Buffer.from(pdfBytesFilled).toString('base64'),
          type: 'application/pdf',
        },
      ],
    });

    console.log('Email sent successfully:', sendResult);

    return NextResponse.json({
      success: true,
      message: 'Loan application PDF sent successfully'
    });

  } catch (error) {
    console.error('Error sending loan PDF:', error);
    return NextResponse.json({ error: 'Failed to send loan PDF' }, { status: 500 });
  }
}
