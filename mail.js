const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  });
  
  const mailOptions = {
    from: '',
    to: '',
    subject: 'Sending Email using Node.js',
    text: 'Lorem Ipsum'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  //Found how to make it work, the easy way is at the moment not possible, because Google blocked it, 
  //TODO and I don't want to deal with the long way just for fun. It is not hard just extra work.