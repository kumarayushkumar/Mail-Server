import nodemailer from 'nodemailer'
import { config } from 'dotenv'

import db from './config/firebase-config'
import { logCatchError, logInfo } from './utils/logger'

config()

const transporter = nodemailer.createTransport({
  host: 'mail.growigh.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

const collectionRef = db.collection('details')

const query = collectionRef.where('created_time', '>', new Date())

const sendEmail = async (documentData: FirebaseFirestore.DocumentData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: `New User: ${documentData.firstname} ${documentData.lastname}`,
      text:
        `User details:\n\n` +
        `First Name: ${documentData.firstname}\n` +
        `Last Name: ${documentData.lastname}\n` +
        `Company: ${documentData.company}\n` +
        `Email: ${documentData.email}\n` +
        `Phone: ${documentData.phone}\n` +
        `Category: ${documentData.category}\n`
    }

    await transporter.sendMail(mailOptions)
    console.log('Email sent')
    logInfo.info('Email sent')
  } catch (error) {
    logCatchError.error('Error sending email:', error)
    logInfo.info('Document data:', { documentData })
  }
}

query.onSnapshot(async snapshot => {
  snapshot.docChanges().forEach(async change => {
    if (change.type === 'added') {
      logInfo.info('New document')
      const newDocumentData = change.doc.data()
      await sendEmail(newDocumentData)
    }
  })
})
