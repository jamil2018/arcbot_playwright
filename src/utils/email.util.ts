import nodemailer from 'nodemailer'

export function sendEmail(
  emails: string[],
  subject: string,
  htmlContent: string
) {
  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password',
    },
  })

  // Define the email options
  const mailOptions = {
    from: 'your-email@example.com',
    to: emails.join(','),
    subject: subject,
    html: htmlContent,
  }

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error)
    } else {
      console.log('Email sent:', info.response)
    }
  })
}
