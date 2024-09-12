// pages/api/submit.js
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Reference to the Firestore collection
      const docRef = await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        timestamp: new Date()
      });

      res.status(200).json({ id: docRef.id });
    } catch (error) {
      console.error('Error adding document: ', error); // Add this line for debugging
      res.status(500).json({ error: 'Failed to save data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
