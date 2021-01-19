const mailer = require("nodemailer");
const { PrivacyPolForm } = require ("./src/component/PrivacyPolForm")


const getEmailData = (to, name, template) => {
    let data = null;

    switch (template) {
        case "hello world":
        data = {
            from : "Lucy Strickland <lucystrickland5@gmail.com>",
            to,
            subject : `Form: ${name}`,
            html: PrivacyPolForm()
        }
        break;

        default:
            data;
    }
    return data;
}

const sendEmail = (to, name, type) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "lucystrickland5@gmail.com",
            pass: "ChicagoMW2020"

        }
    })

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })

}

module.exports = { sendEmail }