const nodemailer = require("nodemailer");

const sendWelcomeEmail = async (recipientEmail, fullName) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'f223391@cfd.nu.edu.pk',
      subject: "Welcome to Our Platform",
      text: `Hello ${fullName},\n\nThank you for signing up! We're glad to have you.\n\nBest Regards,\nTeam`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendWelcomeEmail };
