import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
    return (
        <React.Fragment>
            <Container style={{ borderStyle: "solid", marginLeft: "auto", marginRight: "auto", marginBottom: "20px", display: "block" }}>
                <h4 style={{ fontFamily: "Work Sans", fontSize: "small" }}>Additional Contact Information: </h4>
                <ul style={{ fontFamily: "Work Sans", fontSize: "small" }}>
                    <li>
                        Office: (770) 786-5460
                </li>
                    <li>
                        Fax: (770) 786-5499
                </li>
                    <li>
                        Physical Address: 1138 Conyers St. SE, Covington, Georgia 30014
                </li>
                    <li>
                        Mailing Address: PO Box 70 Covington, Georgia 30015
                </li>
                </ul>
            </Container>
            <br></br>
            <br></br>
        </React.Fragment>
    )
}

export default Contact;