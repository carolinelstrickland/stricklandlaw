import React, { Component } from "react"
import FormFileInput from "react-bootstrap/esm/FormFileInput"
import axios from "axios"
import { ServerStyleSheet } from "styled-components"

class PrivacyPolForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            address: "",
            complaint: "",
            date: "",
            filenumber: "",
            status: "Submit"
        };
    }

    handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
            this.setState({ name: event.target.value });
        } else if (field === "email") {
            this.setState({ email: event.target.value });
        } else if (field === "address") {
            this.setState({ address: event.target.value });
        } else if (field === "complaint") {
            this.setState({ complaint: event.target.value });
        } else if (field === "date") {
            this.setState({ date: event.target.value });
        } else if (field === "filenumber") {
            this.setState({ filenumber: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ status: "Sending" });
        axios({
            method: "POST",
            url: "http://localhost:5051/complaint",
            data: this.state,
        }).then((response) => {
            if (response.data.status === "sent") {
                alert("Message Sent");
                this.setState({ name: "", email: "", message: "", status: "Submit" });
            } else if (response.data.status === "failed") {
                alert("Message Failed");
            }
        });
    }

    render() {
        let buttonText = this.state.status;

        return (
            <React.Fragment>
                <p>
                    CONSUMER COMPLAINT FORM
                <br></br>
                    <br></br>
                Please complete appropriate section(s) below, then “submit” using the following format:
                <br></br>
                    <br></br>
                </p>
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            value={this.state.address}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="complaint">Complaint:</label>
                        <textarea
                            id="complaint"
                            value={this.state.complaint}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Date:</label>
                        <textarea
                            id="date"
                            value={this.state.date}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="filenumber">File Number:</label>
                        <textarea
                            id="filenumber"
                            value={this.state.filenumber}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <button type="submit">{buttonText}</button>
                </form>
            </React.Fragment>
        );
    }
}


export default PrivacyPolForm;