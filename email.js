const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nour.ouali026@gmail.com',
    pass: 'nour.ouali.14082002',
  },
});


const mailOptions = {
  from: 'nour.ouali026@gmail.com',
  to: 'nour14082002@gmail.com',
  subject: 'Test Email',
  text: 'Hello from Node.js!',
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});
