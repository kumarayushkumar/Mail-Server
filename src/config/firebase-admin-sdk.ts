import { config } from "dotenv"
config()

const adminSDK = {
  type: "service_account",
  project_id: "qualityimpro-ac9b7",
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY,
  client_email:
    "firebase-adminsdk-igtjk@qualityimpro-ac9b7.iam.gserviceaccount.com",
  client_id: "106628300761769239780",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-igtjk%40qualityimpro-ac9b7.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
export default adminSDK;
//# sourceMappingURL=firebase-admin-sdk.js.map
