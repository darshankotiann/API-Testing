
// app.post("/selfmail", async (req, res) => {
//   var transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com", // hostname
//     secureConnection: false, // TLS requires secureConnection to be false
//     // secure: true,
//     port: 587, // port for secure SMTP
//     tls: {
//       ciphers: "SSLv3",
//     },
//     auth: {
//       user: "testdarshan@outlook.com",
//       pass: "Dktest@123",
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: "testdarshan@outlook.com",
//       to: "darshankotiann@gmail.com",
//       subject: "Testing",
//       html:    "<p>Hello Team,</p>" +
//       "<p>We got a new message from " +
//       `${req.body.from_name}` +
//       "</p>" +
//       "<p>Email Id - " +
//       `${req.body.from_email}` +
//       "</p>" +
//       "<p>Mobile - " +
//       `${req.body.from_mobile}` +
//       "</p>" +
//       "<p>Message - " +
//       `${req.body.from_message}` +
//       "</p>" +
//       "<p> </p>" +
//       "<p>Please reply back with required details.</p>",
//     });
//   } catch (error) {
//     return res.status(500).json({ error: error.message || error.toString() });
//   }
//   return res.status(200).json({ success: true });
// });
