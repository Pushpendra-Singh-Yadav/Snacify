const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: '1605developers@gmail.com', // Replace with your email
    pass: '9465265663PSYchd',   // Replace with your email password or app-specific password
  },
});

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { companyName, contactPerson, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: '1605developers@gmail.com', // Replace with the company's email
    subject: `Contact Request from ${companyName}`,
    text: `
      Company Name: ${companyName}
      Contact Person: ${contactPerson}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
