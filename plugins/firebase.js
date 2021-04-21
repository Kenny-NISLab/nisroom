import firebase from 'firebase'
import 'firebase/firestore'

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMEIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STRAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  })
}
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)
export { db }
