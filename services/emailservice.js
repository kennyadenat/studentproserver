const nexmo = require('nexmo');
const config = require('../config/key');
const sgMail = require('@sendgrid/mail');

// signup email notification service
exports.mailService = function (payload) {
  sgMail.setApiKey(config.sendgrid);
  console.log(payload.link);
  const msg = {
    to: payload.email,
    from: 'kennyadenat09@gmail.com',
    subject: payload.subject,
    text: 'Please verify your email addres',
    html: payload.link,
  };
  sgMail.send(msg);
}