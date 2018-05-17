//
// var dt = require('./vish');
//
//
// var http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
//
// }).listen(8080);
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vishakha.sharma@locusrags.com',
    pass: 'vishakhalocus7@4'
  }
});

var mailOptions = {
  from: 'vishakha.sharma@locusrags.com',
  to: 'vishakha.sharma@locusrags.com,siddharth.jhanwar@locusrags.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
