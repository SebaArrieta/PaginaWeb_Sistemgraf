const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Create transporter using your email provider
  const transporter = nodemailer.createTransport({
    service: "gmail", // Change this if using another provider
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "yourdestination@example.com", // Change to the destination email
    subject: `New Contact from ${name}`,
    html: `
      <h3>Contact Details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = { sendMail };
