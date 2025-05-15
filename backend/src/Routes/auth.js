const express = require("express");
const { sendWelcomeEmail } = require("../controllers/authController");

const router = express.Router();

app.post('/signup', async (req, res) => {
  try {
    // Signup logic
    res.status(200).send('Signup successful');
  } catch (error) {
    console.error('Error in signup:', error.message);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

module.exports = router;
