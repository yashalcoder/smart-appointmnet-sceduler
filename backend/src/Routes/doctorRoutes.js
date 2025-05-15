// doctorRoutes.js
import express from 'express';
import Doctor from '../Models/Doctor.js';

const router = express.Router();

// GET all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
});

export default router;
