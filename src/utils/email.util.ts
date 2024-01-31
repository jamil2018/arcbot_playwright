import nodemailer from 'nodemailer'
import fs from 'fs'
import { generateHtmlTable } from './reportFormatter.util'
import path from 'path'

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

export async function sendEmail(emails: string[], subject: string) {
  const jsonContent = readJsonFile(
    path.join(__dirname, '../reports/results/json/testResult.json')
  )
  const htmlContent = generateHtmlTable(jsonContent)
  // Create a transporter using Gmail's SMTP settings with OAuth2

  console.log('data from .env file client id:', process.env.EMAIL_CLIENT_ID)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: '<user id>',
      clientId: '<client id>',
      clientSecret: '<client secret>',
      refreshToken: '<refresh token>',
      accessToken: '<access token>',
    },
  })

  // Define the email options
  const mailOptions = {
    from: 'hasnat.jamil@enosisbd.com',
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
