const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
router.post("/", async (req, res) => {
  //Added Async and await
  var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "testdarshan@outlook.com",
      pass: "Dktest@123",
    },
  });
  try {
    // transporter function does not allow any other function, so added directly with try and catch
    await transporter.sendMail({
      from: '"Idea To Infinite" <testdarshan@outlook.com>', // sender address (who sends)
      to: `${req.body.email}`,
      subject: `${req.body.subjectSelf}`, // Subject line
      html:
        "<p>Hello Team,</p>" +
        "<p>We got a new message from " +
        `${req.body.name}` +
        "</p>" +
        "<p>Email Id - " +
        `${req.body.email}` +
        "</p>" +
        "<p>Mobile - " +
        `${req.body.mobile}` +
        "</p>" +
        "<p>Message - " +
        `${req.body.messageSelf}` +
        "</p>" +
        "<p> </p>" +
        "<p>Please reply back with required details.</p>",
    });
  } catch (error) {
    return res.status(500).json({ status: "fail" || error.toString() });
  }
  return res.status(200).json({ status: "success" });
});
module.exports = router;
