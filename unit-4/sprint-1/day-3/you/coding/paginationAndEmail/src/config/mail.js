const nodemailer = require("nodemailer");
require("dotenv").config();

const { CURRENT_ENVIROMENT, USERNAME, PASSWORD } = process.env;
const transporter = nodemailer.createTransport({
  host: CURRENT_ENVIROMENT == "development" ? "smtp.mailtrap.io" : "",
  port: 587,
  secure: false,
  auth: {
    user: USERNAME,
    pass: PASSWORD,
  },
});

module.exports = transporter;
