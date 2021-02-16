import React, { Component } from "react";
import axios from "axios";
import "./style/contactForm.css"

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit"
    };
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: "http://localhost:5051/contact",
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
        <img className="bgImg" style={{opacity:".2", height:"100%", width:"100%"}}src="..//img/image003.jpg"></img>
        <form className="centered" onSubmit={this.handleSubmit.bind(this)} method="POST" style={{fontFamily: "Work Sans"}}>
          <div>
            <label className="contactLabel" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div>
            <label className="contactLabel" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div>
            <label className="contactLabel" htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={this.state.message}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <button className="contactSubmit" type="submit">{buttonText}</button>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactForm;