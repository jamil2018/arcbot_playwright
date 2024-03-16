import nodemailer from 'nodemailer'
import fs from 'fs'
import { generateHtmlContent } from './emailReportFormatter.util'
import path from 'path'
import { envConfig } from './env.util'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function readJsonFile(filePath: string): any {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const jsonData = JSON.parse(fileContent)
    return jsonData
  } catch (error) {
    console.error('Error reading JSON file:', error)
    return null
  }
}

async function sendEmail(emails: string[], subject: string) {
  const jsonContent = readJsonFile(
    path.join(__dirname, '../reports/results/json/testResult.json')
  )
  const htmlContent = generateHtmlContent(jsonContent)

  // Create a transporter using Gmail's SMTP settings with OAuth2
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: envConfig.email_sender,
      clientId: envConfig.oauth_client_id,
      clientSecret: envConfig.oauth_client_secret,
      refreshToken: envConfig.oauth_refresh_token,
      accessToken: envConfig.oauth_access_token,
    },
  })

  // Define the email options
  const mailOptions = {
    from: envConfig.email_sender,
    to: emails.join(','),
    subject: subject,
    html: htmlContent,
  }

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent:', info.response)
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

const emailSender = async () => {
  const recipients = envConfig.emailRecipients
  const validRecipients = recipients?.filter((email) => {
    return email.includes('@')
  })
  if (!validRecipients || validRecipients.length === 0) {
    console.log('No email recipients found. Skipping email sending.')
    return
  }
  console.log('Sending email to the following email address(s):', recipients)
  await sendEmail(validRecipients, 'Test Report')
}

;(async () => {
  try {
    await emailSender()
  } catch (error) {
    console.error('Error sending email:', error)
  }
})()
