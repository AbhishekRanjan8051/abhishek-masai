const transporter = require("../config/mail");

const path = require("path");

const fs = require("fs");
// var html = fs.createReadStream(path.join(__dirname, "../html/name.html"));

const sendMail = (message) => {
  var message = {
    from: message.from,
    to: message.to,
    subject: message.subject,
    text: message.text,
  };

  transporter.sendMail(message);
};

module.exports = sendMail;
