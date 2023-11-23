import admin from 'firebase-admin'
import adminSDK from './firebase-admin-sdk'

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(JSON.stringify(adminSDK)))
})

const db = admin.firestore()

export default db
