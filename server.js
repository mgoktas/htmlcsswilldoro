const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path');
const router = express.Router();
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.use(session({
  secret: 'hello',
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 1000 * 60 * 60 
  },
}))

app.use(cookieParser())

app.use(express.urlencoded({ extended: false }));

// const multer  = require('multer')
// const upload = multer()

// app.post('/deleteaccount', upload.none(), function (req, res, next) {
//   // req.body contains the text fields
//   console.log(req.body)
// })


// app.post('/willdoro/deleteaccount', upload.none(), function (req, res, next) {
//   // req.body contains the text fields
//   console.log(req.body)
// })


// app.post('/in-app', async (req, res) => {


//   console.log(req.body)

  
  
  
 
 
// });


// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// })

// app.listen(8080, 
// 	() => console.log("Server is running..."));

app.use(cors()); // Allows request from any IP (prevent any CORS error)

// Enable parsing of URL-encoded data on all routes:
app.use(express.urlencoded({
   extended: false, // Whether to use algorithm that can handle non-flat data strutures
   limit: 10000, // Limit payload size in bytes
   parameterLimit: 2, // Limit number of form items on payload
}));

app.get('/', async (req,res) => {
  res.sendFile(path.join(__dirname+'/willdoro.html'));
})

const nodemailer = require('nodemailer');

app.post('/deleteaccount', async function (req, res) {

  const email = await req.body.email

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'mgoktasmgoktas@gmail.com',
      pass: 'vwaf atti uhgs acqd'
    },
  });
  
  var mailOptions = {
    from: 'mgoktasmgoktas@gmail.com',
    to: 'ahmethkhkhk@gmail.com',
    subject: 'Account Deletion Request',
    text: 'Please delete this accounts info from database. That was easy!, email' + email
  };
  
  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

})

app.listen(8080);
