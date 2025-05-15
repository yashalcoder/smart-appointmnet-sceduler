// insertDoctors.js
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
import Doctor from './models/Doctor.js';

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('DB Connection Error:', err));

const doctors = [
  {
    name: "Dr. Ayesha Khan",
    specialty: "Cardiologist",
    phoneNumber: "0312-1234567",
    email: "ayesha.khan@hospital.com"
  },
  {
    name: "Dr. Bilal Ahmed",
    specialty: "Dermatologist",
    phoneNumber: "0321-7654321",
    email: "bilal.ahmed@skincare.com"
  },
  {
    name: "Dr. Sarah Malik",
    specialty: "Pediatrician",
    phoneNumber: "0333-9876543",
    email: "sarah.malik@kidsclinic.com"
  },
  {
    name: "Dr. Omar Saeed",
    specialty: "Orthopedic Surgeon",
    phoneNumber: "0345-1122334",
    email: "omar.saeed@bonecare.com"
  },
  {
    name: "Dr. Fatima Shah",
    specialty: "Gynecologist",
    phoneNumber: "0300-5544332",
    email: "fatima.shah@womenshealth.com"
  }
];

// Insert data into the Doctor collection
Doctor.insertMany(doctors)
  .then(() => {
    console.log("Doctors inserted successfully!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Insertion Error:", err);
    mongoose.disconnect();
  });
