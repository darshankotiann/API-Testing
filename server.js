const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

//Welcome mail
app.post("/welcome", async (req, res) => {   //Added Async and await
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

  try {      // transporter function does not allow any other function, so added directly with try and catch
    await transporter.sendMail({  
      from: '"Idea To Infinite" <testdarshan@outlook.com>', // sender address (who sends)
      to: `${req.body.email}`,
      subject: "Welcome To Idea To Infinite", // Subject line
      attachments: [
        {
          filename: "facebook.png",
          path: "images/facebook.png",
          cid: "footer_facebook",
        },
        {
          filename: "instagram.png",
          path: "images/instagram.png",
          cid: "footer_instagram",
        },
        {
          filename: "linkedin.png",
          path: "images/linkedin.png",
          cid: "footer_linkedin",
        },
        {
          filename: "twitter.png",
          path: "images/twitter.png",
          cid: "footer_twitter",
        },
        {
          filename: "email_banner_1.png",
          path: "images/email_banner_1.png",
          cid: "email_banner_1",
        },
        {
          filename: "email_banner_2.png",
          path: "images/email_banner_2.png",
          cid: "email_banner_2",
        },
        {
          filename: "IT_banner.jpg",
          path: "images/IT_banner.jpg",
          cid: "IT_banner",
        },
        {
          filename: "Api_banner.jpg",
          path: "images/Api_banner.jpg",
          cid: "Api_banner",
        },
        {
          filename: "CMS_banner.png",
          path: "images/CMS_banner.png",
          cid: "CMS_banner",
        },
        {
          filename: "Cloud_banner.jpg",
          path: "images/Cloud_banner.jpg",
          cid: "Cloud_banner",
        },
        {
          filename: "Accounting_banner.jpg",
          path: "images/Accounting_banner.jpg",
          cid: "Accounting_banner",
        },
        {
          filename: "Legal_banner.jpg",
          path: "images/Legal_banner.jpg",
          cid: "Legal_banner",
        },
        {
          filename: "Branding_banner.jpg",
          path: "images/Branding_banner.jpg",
          cid: "Branding_banner",
        },
        {
          filename: "Marketing_banner.jpg",
          path: "images/Marketing_banner.jpg",
          cid: "Marketing_banner",
        },
      ],
      html:
        "<table" +
        "  style='border-collapse: collapse; width: 80%; height: 1819.56px; border-style: none; margin-left: auto; margin-right: auto;'" +
        "  border='0'" +
        ">" +
        "  <tbody>" +
        "    <tr style='height: 392.875px;'>" +
        "      <td style='width: 100%; height: 392.875px;'>" +
        "        <span style='font-size: 14pt;'>" +
        "          <img" +
        "            class='CToWUd a6T'" +
        "            style='border-width: 0px; display: block; width: 100%;'" +
        "            tabindex='0'" +
        "            src='cid:email_banner_1'" +
        "            alt='email_banner_1'" +
        "            width='640'" +
        "            height='350'" +
        "            border='0'" +
        "          />" +
        "        </span>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='height: 137.219px;'>" +
        "      <td style='height: 137.219px; width: 100%;' align='center'>" +
        "        <p>" +
        "          <strong>" +
        "            <span style='font-size: 20pt;'>Hi, " +
        `${req.body.name}` +
        "            </span>" +
        "          </strong>" +
        "        </p>" +
        "        <p>" +
        "          <strong>" +
        "            <span style='font-size: 14pt;'>" +
        "              Welcome to Idea To Infinite" +
        "            </span>" +
        "          </strong>" +
        "        </p>" +
        "        <p><span style='font-size: 12pt;'>Thank you for connecting with us.</span><br />" +
        "        <span style='font-size: 12pt;'>Our team will reach out to you shortly for the service.</span></p>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='height: 248.141px;'>" +
        "      <td style='width: 100%; height: 248.141px;'>" +
        "        <span style='font-size: 14pt;'>" +
        "          <img" +
        "            class='CToWUd a6T'" +
        "            style='border-width: 0px; display: block; width: 1338px;'" +
        "            tabindex='0'" +
        "            src='cid:email_banner_2'" +
        "            alt='email_banner_2'" +
        "            width='640'" +
        "            height='200'" +
        "            border='0'" +
        "          />" +
        "        </span>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='height: 186.266px;'>" +
        "      <td" +
        "        style='height: 186.266px; width: 100%; border-style: hidden; border-width: 0px;'" +
        "        align='center'" +
        "      >" +
        "        <p>" +
        "          <span style='font-size: 16pt;'>" +
        "            <strong>IT Services</strong>" +
        "          </span>" +
        "        </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 12pt;'>" +
        "            Idea to Infinite team has long periods of involvement with IT and" +
        "          alongside Digital Transformation Services." +
        "          </span>" +
        "        </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 12pt;'>" +
        "            Our ability in various scopes of IT beginning from IT Solutioning, API" +
        "          Services, CMS, and Cloud Services brings growth to your business." +
        "          </span>" +
        "        </p>" +
        "        <p>" +
        "          <a" +
        "            href='https://ideatoinfinite.com/it-services'" +
        "            target='_blank'" +
        "            rel='noopener'" +
        "          >" +
        "            Learn More" +
        "          </a>" +
        "        </p>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='height: 198px;'>" +
        "      <td style='width: 100%; height: 198px; border-style: hidden;'>" +
        "        <table" +
        "          style='border-collapse: collapse; width: 100.001%; border-style: hidden; height: 174px;'" +
        "          border='0'" +
        "        >" +
        "          <tbody>" +
        "            <tr style='height: 149.328px;' align='center'>" +
        "              <td style='width: 24.9814%;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:IT_banner'" +
        "                      alt='IT_banner'" +
        "                      width='640'" +
        "                      height='350'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>IT Solutioning</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 24.9814%;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:Api_banner'" +
        "                      alt='Api_banner'" +
        "                      width='640'" +
        "                      height='350'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>API Services</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 24.9814%;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:CMS_banner'" +
        "                      alt='CMS_banner'" +
        "                      width='640'" +
        "                      height='350'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>CMS</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 25.0559%;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:Cloud_banner'" +
        "                      alt='Cloud_banner'" +
        "                      width='640'" +
        "                      height='350'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>Cloud Services</strong>" +
        "                </p>" +
        "              </td>" +
        "            </tr>" +
        "          </tbody>" +
        "        </table>" +
        "        <p align='center'> </p>" +
        "        <p style='text-align: -webkit-center;'> </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 16pt;'>" +
        "            <strong>End To End Digital Transformation</strong>" +
        "          </span>" +
        "        </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 12pt;'>" +
        "            Our services, as a top-notch Custom Digital IT Solution company, are" +
        "            meant to take your organization" +
        "          </span>" +
        "        </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 12pt;'>" +
        "            to the next level, bridging the gap between you and the success you" +
        "            desire." +
        "          </span>" +
        "        </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 12pt;'>" +
        "            <a" +
        "              style='font-size: medium;'" +
        "              href='https://ideatoinfinite.com/digital-transformation-services'" +
        "              target='_blank'" +
        "              rel='noopener'" +
        "            >" +
        "              Learn More" +
        "            </a>" +
        "          </span>" +
        "        </p>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='height: 198px;'>" +
        "      <td style='width: 100%; height: 198px; border-style: hidden;'>" +
        "        <table" +
        "          style='border-collapse: collapse; width: 100.001%; border-style: hidden; height: 174px;'" +
        "          border='0'" +
        "        >" +
        "          <tbody>" +
        "            <tr style='height: 149.328px;' align='center'>" +
        "              <td style='width: 19.9851%; height: 149.328px;'>" +
        "                <p>" +
        "                  <img" +
        "                    class='CToWUd a6T'" +
        "                    style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                    tabindex='0'" +
        "                    src='cid:Accounting_banner'" +
        "                    alt='Accounting_banner'" +
        "                    width='640'" +
        "                    height='400'" +
        "                    border='0'" +
        "                  />" +
        "                </p>" +
        "                <p>" +
        "                  <strong>Accounting</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 19.9851%; height: 149.328px;'>" +
        "                <p>" +
        "                  <img" +
        "                    class='CToWUd a6T'" +
        "                    style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                    tabindex='0'" +
        "                    src='cid:Legal_banner'" +
        "                    alt='Legal_banner'" +
        "                    width='640'" +
        "                    height='400'" +
        "                    border='0'" +
        "                  />" +
        "                </p>" +
        "                <p>" +
        "                  <strong>Legal Compliances</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 19.9851%; height: 149.328px;'>" +
        "                <p>" +
        "                  <img" +
        "                    class='CToWUd a6T'" +
        "                    style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                    tabindex='0'" +
        "                    src='cid:Branding_banner'" +
        "                    alt='Branding_banner'" +
        "                    width='640'" +
        "                    height='400'" +
        "                    border='0'" +
        "                  />" +
        "                </p>" +
        "                <p>" +
        "                  <strong>Branding</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 19.9851%; height: 149.328px;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:IT_banner'" +
        "                      alt='IT_banner'" +
        "                      width='640'" +
        "                      height='400'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>IT Solutioning</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 20.0597%; height: 149.328px;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:Marketing_banner'" +
        "                      alt='Marketing_banner'" +
        "                      width='640'" +
        "                      height='400'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>Marketing</strong>" +
        "                </p>" +
        "              </td>" +
        "            </tr>" +
        "          </tbody>" +
        "        </table>" +
        "        <p align='center'> </p>" +
        "        <p align='center'> </p>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='background-color: #3e3e3e; height: 199.172px;' align='center'>" +
        "      <td style='width: 100%; border-style: hidden; height: 199.172px;'>" +
        "        <p>" +
        "           " +
        "          <a href='https://www.facebook.com/ideatoinfinite' target='_blank' rel='noopener'><img" +
        "            class='CToWUd a6T'" +
        "            style='border-radius: 50%; border-width: 0px; height: 40px; width: 40px; margin-right: 10px;'" +
        "            tabindex='0'" +
        "            src='cid:footer_facebook'" +
        "            alt='footer_facebook'" +
        "            width='640'" +
        "            height='400'" +
        "            border='0'" +
        "          /></a>" +
        "          <a href='https://www.instagram.com/ideatoinfinite/' target='_blank' rel='noopener'><img" +
        "            class='CToWUd a6T'" +
        "            style='border-radius: 50%; border-width: 0px; height: 40px; width: 40px; margin-right: 10px;'" +
        "            tabindex='0'" +
        "            src='cid:footer_instagram'" +
        "            alt='footer_instagram'" +
        "            width='640'" +
        "            height='400'" +
        "            border='0'" +
        "          /></a>" +
        "          <a href='https://www.linkedin.com/company/ideatoinfinite/' target='_blank' rel='noopener'><img" +
        "            class='CToWUd a6T'" +
        "            style='border-radius: 50%; border-width: 0px; height: 40px; width: 40px; margin-right: 10px;'" +
        "            tabindex='0'" +
        "            src='cid:footer_linkedin'" +
        "            alt='footer_linkedin'" +
        "            width='640'" +
        "            height='400'" +
        "            border='0'" +
        "          /></a>" +
        "          <a href='https://twitter.com/ideatoinfinite' target='_blank' rel='noopener'><img" +
        "            class='CToWUd a6T'" +
        "            style='border-radius: 50%; border-width: 0px; height: 40px; width: 40px; margin-right: 10px;'" +
        "            tabindex='0'" +
        "            src='cid:footer_twitter'" +
        "            alt='footer_twitter'" +
        "            width='640'" +
        "            height='400'" +
        "            border='0'" +
        "          /></a>" +
        "        </p>" +
        "        <p>" +
        "          <span style='color: #ffffff;'>" +
        "            We conceptualize and strategize the execution of all services" +
        "            required for a customer," +
        "          </span>" +
        "          <br />" +
        "          <span style='color: #ffffff;'>" +
        "            allowing enterprises to reach their target audiences globally with" +
        "            everlasting associations and endless growth." +
        "          </span>" +
        "        </p>" +
        "        <p> </p>" +
        "        <p>" +
        "          <span style='color: #ffffff;'>" +
        "            <span style='text-decoration: underline;'>" +
        "              <a" +
        "                style='color: #ffffff; text-decoration: underline;'" +
        "                href='https://ideatoinfinite.com/policy'" +
        "                target='_blank'" +
        "                rel='noopener'" +
        "              >" +
        "                Privacy Policy" +
        "              </a>" +
        "            </span>" +
        "              | " +
        "            <a" +
        "              style='color: #ffffff;'" +
        "              href='https://ideatoinfinite.com/terms'" +
        "              target='_blank'" +
        "              rel='noopener'" +
        "            >" +
        "              Terms and Conditions" +
        "            </a>" +
        "          </span>" +
        "        </p>" +
        "      </td>" +
        "    </tr>" +
        "  </tbody>" +
        "</table>", // html body
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ success:true});
});

//Subscription mail
app.post("/subscribe", async (req, res) => {   //Added Async and await
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
  try { // transporter function does not allow any other function, so added directly with try and catch
    await transporter.sendMail({
      //25-
      from: '"Idea To Infinite" <testdarshan@outlook.com>', // sender address (who sends)
      to: `${req.body.email}`,
      subject: "Thank you for your subscription", // Subject line
      attachments: [
        {
          filename: "facebook.png",
          path: "images/facebook.png",
          cid: "footer_facebook",
        },
        {
          filename: "instagram.png",
          path: "images/instagram.png",
          cid: "footer_instagram",
        },
        {
          filename: "linkedin.png",
          path: "images/linkedin.png",
          cid: "footer_linkedin",
        },
        {
          filename: "twitter.png",
          path: "images/twitter.png",
          cid: "footer_twitter",
        },
        {
          filename: "email_banner_1.png",
          path: "images/email_banner_1.png",
          cid: "email_banner_1",
        },
        {
          filename: "email_banner_2.png",
          path: "images/email_banner_2.png",
          cid: "email_banner_2",
        },
        {
          filename: "IT_banner.jpg",
          path: "images/IT_banner.jpg",
          cid: "IT_banner",
        },
        {
          filename: "Api_banner.jpg",
          path: "images/Api_banner.jpg",
          cid: "Api_banner",
        },
        {
          filename: "CMS_banner.png",
          path: "images/CMS_banner.png",
          cid: "CMS_banner",
        },
        {
          filename: "Cloud_banner.jpg",
          path: "images/Cloud_banner.jpg",
          cid: "Cloud_banner",
        },
        {
          filename: "Accounting_banner.jpg",
          path: "images/Accounting_banner.jpg",
          cid: "Accounting_banner",
        },
        {
          filename: "Legal_banner.jpg",
          path: "images/Legal_banner.jpg",
          cid: "Legal_banner",
        },
        {
          filename: "Branding_banner.jpg",
          path: "images/Branding_banner.jpg",
          cid: "Branding_banner",
        },
        {
          filename: "Marketing_banner.jpg",
          path: "images/Marketing_banner.jpg",
          cid: "Marketing_banner",
        },
      ],
      html:
        "<table" +
        "  style='border-collapse: collapse; width: 80%; height: 1819.56px; border-style: none; margin-left: auto; margin-right: auto;'" +
        "  border='0'" +
        ">" +
        "  <tbody>" +
        "    <tr style='height: 392.875px;'>" +
        "      <td style='width: 80%; height: 392.875px;'>" +
        "        <span style='font-size: 14pt;'>" +
        "          <img" +
        "            class='CToWUd a6T'" +
        "            style='border-width: 0px; display: block; width: 100%;'" +
        "            tabindex='0'" +
        "            src='cid:email_banner_1'" +
        "            alt='email_banner_1'" +
        "            width='640'" +
        "            height='350'" +
        "            border='0'" +
        "          />" +
        "        </span>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='height: 137.219px;'>" +
        "      <td style='height: 137.219px; width: 80%;' align='center'>" +
        "        <p>" +
        "          <strong>" +
        "            <span style='font-size: 20pt;'>Greetings,</span>" +
        "          </strong>" +
        "        </p>" +
        "        <p>" +
        "          <strong>" +
        "            <span style='font-size: 14pt;'>" +
        "              Thank you for subscribing." +
        "            </span>" +
        "          </strong>" +
        "        </p>" +
        "        <p><span style='font-size: 12pt;'>We will help you get the best of newsletters from here.</span>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='height: 248.141px;'>" +
        "      <td style='width: 80%; height: 248.141px;'>" +
        "        <span style='font-size: 14pt;'>" +
        "          <img" +
        "            class='CToWUd a6T'" +
        "            style='border-width: 0px; display: block; width: 1338px;'" +
        "            tabindex='0'" +
        "            src='cid:email_banner_2'" +
        "            alt='email_banner_2'" +
        "            width='640'" +
        "            height='200'" +
        "            border='0'" +
        "          />" +
        "        </span>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='height: 186.266px;'>" +
        "      <td" +
        "        style='height: 186.266px; width: 80%; border-style: hidden; border-width: 0px;'" +
        "        align='center'" +
        "      >" +
        "        <p>" +
        "          <span style='font-size: 16pt;'>" +
        "            <strong>IT Services</strong>" +
        "          </span>" +
        "        </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 12pt;'>" +
        "            Idea to Infinite team has long periods of involvement with IT and" +
        "          alongside Digital Transformation Services." +
        "          </span>" +
        "        </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 12pt;'>" +
        "            Our ability in various scopes of IT beginning from IT Solutioning, API" +
        "          Services, CMS, and Cloud Services brings growth to your business." +
        "          </span>" +
        "        </p>" +
        "        <p>" +
        "          <a" +
        "            href='https://ideatoinfinite.com/it-services'" +
        "            target='_blank'" +
        "            rel='noopener'" +
        "          >" +
        "            Learn More" +
        "          </a>" +
        "        </p>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='height: 198px;'>" +
        "      <td style='width: 80%; height: 198px; border-style: hidden;'>" +
        "        <table" +
        "          style='border-collapse: collapse; width: 100.001%; border-style: hidden; height: 174px;'" +
        "          border='0'" +
        "        >" +
        "          <tbody>" +
        "            <tr style='height: 149.328px;' align='center'>" +
        "              <td style='width: 24.9814%;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:IT_banner'" +
        "                      alt='IT_banner'" +
        "                      width='640'" +
        "                      height='400'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>IT Solutioning</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 24.9814%;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:Api_banner'" +
        "                      alt='Api_banner'" +
        "                      width='640'" +
        "                      height='400'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>API Services</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 24.9814%;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:CMS_banner'" +
        "                      alt='CMS_banner'" +
        "                      width='640'" +
        "                      height='400'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>CMS</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 25.0559%;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:Cloud_banner'" +
        "                      alt='Cloud_banner'" +
        "                      width='640'" +
        "                      height='400'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>Cloud Services</strong>" +
        "                </p>" +
        "              </td>" +
        "            </tr>" +
        "          </tbody>" +
        "        </table>" +
        "        <p align='center'> </p>" +
        "        <p style='text-align: -webkit-center;'> </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 16pt;'>" +
        "            <strong>End To End Digital Transformation</strong>" +
        "          </span>" +
        "        </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 12pt;'>" +
        "            Our services, as a top-notch Custom Digital IT Solution company, are" +
        "            meant to take your organization" +
        "          </span>" +
        "        </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 12pt;'>" +
        "            to the next level, bridging the gap between you and the success you" +
        "            desire." +
        "          </span>" +
        "        </p>" +
        "        <p style='text-align: -webkit-center;'>" +
        "          <span style='font-size: 12pt;'>" +
        "            <a" +
        "              style='font-size: medium;'" +
        "              href='https://ideatoinfinite.com/digital-transformation-services'" +
        "              target='_blank'" +
        "              rel='noopener'" +
        "            >" +
        "              Learn More" +
        "            </a>" +
        "          </span>" +
        "        </p>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='height: 198px;'>" +
        "      <td style='width: 80%; height: 198px; border-style: hidden;'>" +
        "        <table" +
        "          style='border-collapse: collapse; width: 100.001%; border-style: hidden; height: 174px;'" +
        "          border='0'" +
        "        >" +
        "          <tbody>" +
        "            <tr style='height: 149.328px;' align='center'>" +
        "              <td style='width: 19.9851%; height: 149.328px;'>" +
        "                <p>" +
        "                  <img" +
        "                    class='CToWUd a6T'" +
        "                    style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                    tabindex='0'" +
        "                    src='cid:Accounting_banner'" +
        "                    alt='Accounting_banner'" +
        "                    width='640'" +
        "                    height='400'" +
        "                    border='0'" +
        "                  />" +
        "                </p>" +
        "                <p>" +
        "                  <strong>Accounting</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 19.9851%; height: 149.328px;'>" +
        "                <p>" +
        "                  <img" +
        "                    class='CToWUd a6T'" +
        "                    style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                    tabindex='0'" +
        "                    src='cid:Legal_banner'" +
        "                    alt='Legal_banner'" +
        "                    width='640'" +
        "                    height='400'" +
        "                    border='0'" +
        "                  />" +
        "                </p>" +
        "                <p>" +
        "                  <strong>Legal Compliances</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 19.9851%; height: 149.328px;'>" +
        "                <p>" +
        "                  <img" +
        "                    class='CToWUd a6T'" +
        "                    style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                    tabindex='0'" +
        "                    src='cid:Branding_banner'" +
        "                    alt='Branding_banner'" +
        "                    width='640'" +
        "                    height='400'" +
        "                    border='0'" +
        "                  />" +
        "                </p>" +
        "                <p>" +
        "                  <strong>Branding</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 19.9851%; height: 149.328px;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:IT_banner'" +
        "                      alt='IT_banner'" +
        "                      width='640'" +
        "                      height='400'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>IT Solutioning</strong>" +
        "                </p>" +
        "              </td>" +
        "              <td style='width: 20.0597%; height: 149.328px;'>" +
        "                <p>" +
        "                  <strong>" +
        "                    <img" +
        "                      class='CToWUd a6T'" +
        "                      style='border-width: 0px; display: block; width: 50%; height: 60%;'" +
        "                      tabindex='0'" +
        "                      src='cid:Marketing_banner'" +
        "                      alt='Marketing_banner'" +
        "                      width='640'" +
        "                      height='400'" +
        "                      border='0'" +
        "                    />" +
        "                  </strong>" +
        "                </p>" +
        "                <p>" +
        "                  <strong>Marketing</strong>" +
        "                </p>" +
        "              </td>" +
        "            </tr>" +
        "          </tbody>" +
        "        </table>" +
        "        <p align='center'> </p>" +
        "        <p align='center'> </p>" +
        "      </td>" +
        "    </tr>" +
        "    <tr style='background-color: #3e3e3e; height: 199.172px;' align='center'>" +
        "      <td style='width: 80%; border-style: hidden; height: 199.172px;'>" +
        "        <p>" +
        "           " +
        "          <a href='https://www.facebook.com/ideatoinfinite' target='_blank' rel='noopener'><img" +
        "            class='CToWUd a6T'" +
        "            style='border-radius: 50%; border-width: 0px; height: 40px; width: 40px; margin-right: 10px;'" +
        "            tabindex='0'" +
        "            src='cid:footer_facebook'" +
        "            alt='footer_facebook'" +
        "            width='640'" +
        "            height='400'" +
        "            border='0'" +
        "          /></a>" +
        "          <a href='https://www.instagram.com/ideatoinfinite/' target='_blank' rel='noopener'><img" +
        "            class='CToWUd a6T'" +
        "            style='border-radius: 50%; border-width: 0px; height: 40px; width: 40px; margin-right: 10px;'" +
        "            tabindex='0'" +
        "            src='cid:footer_instagram'" +
        "            alt='footer_instagram'" +
        "            width='640'" +
        "            height='400'" +
        "            border='0'" +
        "          /></a>" +
        "          <a href='https://www.linkedin.com/company/ideatoinfinite/' target='_blank' rel='noopener'><img" +
        "            class='CToWUd a6T'" +
        "            style='border-radius: 50%; border-width: 0px; height: 40px; width: 40px; margin-right: 10px;'" +
        "            tabindex='0'" +
        "            src='cid:footer_linkedin'" +
        "            alt='footer_linkedin'" +
        "            width='640'" +
        "            height='400'" +
        "            border='0'" +
        "          /></a>" +
        "          <a href='https://twitter.com/ideatoinfinite' target='_blank' rel='noopener'><img" +
        "            class='CToWUd a6T'" +
        "            style='border-radius: 50%; border-width: 0px; height: 40px; width: 40px; margin-right: 10px;'" +
        "            tabindex='0'" +
        "            src='cid:footer_twitter'" +
        "            alt='footer_twitter'" +
        "            width='640'" +
        "            height='400'" +
        "            border='0'" +
        "          /></a>" +
        "        </p>" +
        "        <p>" +
        "          <span style='color: #ffffff;'>" +
        "            We conceptualize and strategize the execution of all services" +
        "            required for a customer," +
        "          </span>" +
        "          <br />" +
        "          <span style='color: #ffffff;'>" +
        "            allowing enterprises to reach their target audiences globally with" +
        "            everlasting associations and endless growth." +
        "          </span>" +
        "        </p>" +
        "        <p> </p>" +
        "        <p>" +
        "          <span style='color: #ffffff;'>" +
        "            <span style='text-decoration: underline;'>" +
        "              <a" +
        "                style='color: #ffffff; text-decoration: underline;'" +
        "                href='https://ideatoinfinite.com/policy'" +
        "                target='_blank'" +
        "                rel='noopener'" +
        "              >" +
        "                Privacy Policy" +
        "              </a>" +
        "            </span>" +
        "              | " +
        "            <a" +
        "              style='color: #ffffff;'" +
        "              href='https://ideatoinfinite.com/terms'" +
        "              target='_blank'" +
        "              rel='noopener'" +
        "            >" +
        "              Terms and Conditions" +
        "            </a>" +
        "          </span>" +
        "        </p>" +
        "      </td>" +
        "    </tr>" +
        "  </tbody>" +
        "</table>", // html body
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ success:true});
});

//Self mail of details
app.post("/selfmail", async (req, res) => {   //Added Async and await
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
  try { // transporter function does not allow any other function, so added directly with try and catch
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
    return res.status(500).json({ error: "fail" || error.toString() });
  }
  return res.status(200).json({ success: true });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
