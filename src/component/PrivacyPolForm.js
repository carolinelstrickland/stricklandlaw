import React from "react"
import { init, sendForm } from 'emailjs-com';

init('mariafcc01@gmail.com');

const PrivacyPolForm =() => {

    
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
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="firstName" class="form-control" id="firstName"></input>
                    </div>
                    <div class="col-md-6">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="lastName" class="form-control" id="lastName"></input>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity"></input>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip"></input>
                    </div>
                    <div class="col-12">
                        <label for="complaint" class="form-label">Consumer Complaint</label>
                        <input type="text" class="form-control" id="complaint" placeholder="1234 Main St"></input>
                    </div>
                    <div class="col-12">
                        <label for="date" class="form-label">Date of Complaint</label>
                        <input type="text" class="form-control" id="date" placeholder="01/01/2021"></input>
                    </div>
                    <div class="col-12">
                        <label for="fileNum" class="form-label">Strickland File Number</label>
                        <input type="text" class="form-control" id="fileNum" placeholder="1234"></input>
                    </div>
                    <div class="col-12">
                        <label for="policyNum" class="form-label">Policy Number</label>
                        <input type="text" class="form-control" id="policyNum" placeholder="01/01/2021"></input>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Property Type</label>
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="transaction" class="form-label">Transaction Type </label>
                        <input type="text" class="form-control" id="transaction" placeholder="Purchase, Refi, REO, etc."></input>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    
}

export default PrivacyPolForm;