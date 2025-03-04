const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (req, res) => {
  const { name, email, message, sitioweb } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER, // Simulated sender email
    to: "contacto@sistemgraf.cl", // Test recipient
    subject: `New Contact from ${name}`,
    html: `
      <h3>Contact Details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${sitioweb || "N/A"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  // Test mode: Log email instead of sending
  if (process.env.TEST_MODE === "true") {
    console.log("📧 TEST MODE: Email not sent.");
    console.log("Email Details:", mailOptions);
    return res.status(200).json({ message: "Test email logged successfully!" });
  }

  // Real email sending (only if TEST_MODE is false)
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = { sendMail };

