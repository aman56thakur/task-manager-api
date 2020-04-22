const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amant9656@gmail.com',
        subject: 'Welcome aboard',
        text: `Welcome to the app, ${name}. We hope you'll get along with the interface!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amant9656@gmail.com',
        subject: 'Account Deleted: We will miss you!',
        text: `Hi ${name}! Per your request, we've cancelled your subscription to the app. Thanks for being a customer and trying the app. Feel free to drop in your suggestions and tell us what went wrong with your experience with the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}