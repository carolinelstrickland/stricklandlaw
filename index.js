import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import { sendEmail } from "./mail";

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/sendMail", (req, res) => {
    console.log(req.body)

    sendEmail(to, name, type)
})

app.listen(5000, () => {
    console.log("Server listening on PORT 5000")
})