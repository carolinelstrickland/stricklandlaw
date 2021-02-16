const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5051, () => console.log("Server Running"));




const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "CDS7706011551@gmail.com",
        pass: "",
    },
});

contactEmail.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});



router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: "CDS7706011551@gmail.com",
        to: "mariafcc01@icloud.com",
        subject: "Contact Form Message",
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "failed" });
        } else {
            res.json({ status: "sent" });
        }
    });
});

router.post("/complaint", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const complaint = req.body.complaint;
    const date = req.body.date;
    const filenumber = req.body.filenumber;
    const mail = {
        from: "CDS7706011551@gmail.com",
        to: "mariafcc01@icloud.com",
        subject: "Contact Form Message",
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <p>Complaint: ${complaint}</p>
        <p>Date: ${date}</p>
        <p>FileNumber: ${filenumber}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "failed" });
        } else {
            res.json({ status: "sent" });
        }
    });
});