// models/Doctor.js
import mongoose from 'mongoose';
// In your Doctor model
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  specialty: {
    type: String,
    required: [true, 'Specialty is required']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  }
});

// Third parameter 'Doctor' explicitly specifies the collection name
const Doctor = mongoose.model('Doctor', doctorSchema, 'Doctor');

export default Doctor;
