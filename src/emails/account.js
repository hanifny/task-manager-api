const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
});
const sourceMail = '<alinea.dev@gmail.com>'

const sendWelcomeEmail = (email, name) => {
    mailgun.messages().send({
        from: sourceMail,
        to: [email],
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
        // html: `<h1>Welcome to the app, ${name}. Let me know how you get along with the app.</h1>`
    }, function (error, body) {
        console.log(body);
    });
}

const sendCancelationEmail = (email, name) => {
    mailgun.messages().send({
        from: sourceMail,
        to: [email],
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    }, function (error, body) {
        console.log(body);
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}