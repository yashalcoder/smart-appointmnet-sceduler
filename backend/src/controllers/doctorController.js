// controllers/doctorController.js
import Doctor from '../Models/Doctor.js';
import Appointment from '../Models/Appointment.js';

export const getDoctorDashboard = async (req, res) => {
  try {
    const doctorId = req.params.id; // Get doctorId from route params
    
    // Fetch doctor data
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    
    // Fetch appointments for the doctor
    const appointments = await Appointment.find({ doctorId }).sort({ date: -1 }); // Sort by most recent appointments

    // Calculate appointments today (assuming "today" is based on date)
    const today = new Date();
    const appointmentsToday = appointments.filter(
      (appointment) =>
        new Date(appointment.date).toDateString() === today.toDateString()
    ).length;

    res.json({
      doctor: {
        name: doctor.name,
        patients: doctor.patients,
        appointmentsToday,
        totalAppointments: appointments.length,
        avatar: doctor.avatar, // Send avatar URL if you need it
      },
      appointments,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
