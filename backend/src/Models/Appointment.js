import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  doctorId: mongoose.Schema.Types.ObjectId,
  patientName: String,
  date: Date,
  time: String,
  type: String,
  avatar: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
