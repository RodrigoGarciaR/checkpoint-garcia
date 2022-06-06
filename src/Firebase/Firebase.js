import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBHvzmtMEV5BALLgeMxjm6Q2vx5ffKohF8',
    authDomain: 'checkpoint-garcia.firebaseapp.com',
    projectId: 'checkpoint-garcia',
    storageBucket: 'checkpoint-garcia.appspot.com',
    messagingSenderId: '491879328158',
    appId: '1:491879328158:web:f65ac309c1cb379ab80e8f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);