const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const sourceMail = '<alinea.dev@gmail.com>'
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    public_key: process.env.MAILGUN_PUBLIC_KEY
});

const sendWelcomeEmail = (email, name) => {
    mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: sourceMail,
        to: [email],
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
        // html: `<h1>Welcome to the app, ${name}. Let me know how you get along with the app.</h1>`
      })
      .then(msg => console.log(msg)) // logs response data
      .catch(err => console.log(err)); // logs any error
}

const sendCancelationEmail = (email, name) => {
    mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: sourceMail, 
        to: [email], 
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}