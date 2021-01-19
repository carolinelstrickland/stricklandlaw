import React, { useState } from "react"
import FormFileInput from "react-bootstrap/esm/FormFileInput"
import axios from "axios"
import { ServerStyleSheet } from "styled-components"

function PrivacyPolForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [inputAddress, setAddress] = useState('')
    const [inputAddress2, setAddress2] = useState('')
    const [inputCity, setInputCity] = useState('')
    const [inputState, setInputState] = useState('')
    const [inputZip, setInputZip] = useState('')
    const [complaint, setComplaint] = useState('')
    const [date, setDate] = useState('')
    const [fileNum, setFileNum] = useState('')
    const [policyNum, setPolicyNum] = useState('')
    const [inputType, setInputType] = useState('')
    const [transaction, setTransaction] = useState('')

    const handleClick = (e) => {
        e.preventDefault();

        if (e.target.value.id === "firstName") {
            setFirstName(e.target.value)
        } else if (e.target.value.id === "lastName") {
            setLastName(e.target.value)
        // } else if (e.target.value.id === "inputAddress") {
        //     setAddress(e.target.va)
        // } else if (e.target.value.id === "inputAddress2") {
        //     setAddress2(e.target.value)
        // } else if (e.target.value.id === "inputCity") {
        //     setInputCity(e.target.va)
        // } else if (e.target.value.id === "inputState") {
        //     setInputState(e.target.va)
        // } else if (e.target.value.id === "inputZip") {
        //     setInputZip(e.target.va)
        // } else if (e.target.value.id === "complaint") {
        //     setComplaint(e.target.va)
        // } else if (e.target.value.id === "date") {
        //     setDate(e.target.va)
        // } else if (e.target.value.id === "fileNum") {
        //     setFileNum(e.target.va)
        // } else if (e.target.value.id === "policyNum") {
        //     setPolicyNum(e.target.va)
        // } else if (e.target.value.id === "inputType") {
        //     setInputType(e.target.va)
        // } else if (e.target.value.id === "transaction") {
        //     setTransaction(e.target.va)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSubmit = {
            firstName,
            lastName,
            inputAddress,
            inputAddress2,
            inputCity,
            inputState,
            inputZip,
            complaint,
            date,
            fileNum,
            policyNum,
            inputType,
            transaction
        }

        axios.post("/api/sendMail", dataToSubmit)
    }

    // http://localhost:3000

    // server

    // http://localhost:5000




    return (
        <div>
            <p>
                CONSUMER COMPLAINT FORM
                <br></br>
                <br></br>
                Please complete appropriate section(s) below, then “submit” using the following format:
                <br></br>
                <br></br>
            </p>
            <form class="row g-3" onSubmit={handleSubmit}>
                <div class="col-md-6">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="firstName" class="form-control" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                </div>
                <div class="col-md-6">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="lastName" class="form-control" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={inputAddress} onChange={e => setAddress(e.target.value)}></input>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={inputAddress2} onChange={e => setAddress2(e.target.value)}></input>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" value={inputCity} onChange={e => setInputCity(e.target.value)}></input>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select" value={inputState} onChange={e => setInputState(e.target.value)}>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="number" class="form-control" id="inputZip" value={inputZip} onChange={e => setInputZip(e.target.value)}></input>
                </div>
                <div class="col-12">
                    <label for="complaint" class="form-label">Consumer Complaint</label>
                    <input type="text" class="form-control" id="complaint" placeholder="Text goes here" value={complaint} onChange={e => setComplaint(e.target.value)}></input>
                </div>
                <div class="col-12">
                    <label for="date" class="form-label">Date of Complaint</label>
                    <input type="date" class="form-control" id="date" placeholder="01/01/2021" value={date} onChange={e => setDate(e.target.value)}></input>
                </div>
                <div class="col-12">
                    <label for="fileNum" class="form-label">Strickland File Number</label>
                    <input type="text" class="form-control" id="fileNum" placeholder="1234" value={fileNum} onChange={e => setFileNum(e.target.value)}></input>
                </div>
                <div class="col-12">
                    <label for="policyNum" class="form-label">Policy Number</label>
                    <input type="text" class="form-control" id="policyNum" value={policyNum} onChange={e => setPolicyNum(e.target.value)}></input>
                </div>
                <div class="col-md-4">
                    <label for="inputType" class="form-label">Property Type</label>
                    <select id="inputType" class="form-select" value={inputType} onChange={e => setInputType(e.target.value)}>
                        <option selected>Choose...</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                    </select>
                </div>
                <div class="col-12">
                    <label for="transaction" class="form-label">Transaction Type </label>
                    <input type="text" class="form-control" id="transaction" placeholder="Purchase, Refi, REO, etc." value={transaction} onChange={e => setTransaction(e.target.value)}></input>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )

}

export default PrivacyPolForm;