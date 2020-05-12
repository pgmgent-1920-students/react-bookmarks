import * as admin from 'firebase-admin';
import 'firebase/firestore';

import serviceAccount from './key.json';

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-pgmgent.firebaseio.com"
});

// Reference Firestore
const db = app.firestore();

/*
 * Generate Timestamps
*/
const generateTimestamps = () => {
  return {
    createdAt: Date.now(),
    modifiedAt: null,
    deletedAt: null,
  }
};

export {
  admin,
  app,
  db,
  generateTimestamps
}