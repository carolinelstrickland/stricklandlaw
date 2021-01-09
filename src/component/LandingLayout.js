import React from "react";
import { Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade"

function LandingLayout() {
    return (
        <React.Fragment>
            <Fade bottom>
                <Container fluid>
                    <h3 style={{ textAlign: "center", fontFamily: "Work Sans" }}>
                        Strickland & Strickland, LLP
                </h3>
                    <ul style={{ fontFamily: "Work Sans", textAlign: "right", listStyleType: "none", textAlign: "center", fontSize: "15px" }}>
                        <li>Phone: (770) 786-5460</li>
                        <a href={`mailto:info@strickland-law.com`}><li>Email: info@strickland-law.com</li></a>
                    </ul>
                    <img style={{ paddingTop: "10px", marginRight: "auto", marginLeft: "auto", display: "block" }} src="https://i.pinimg.com/originals/19/f4/de/19f4de41f41a880b88fd7c4bca036d11.jpg" alt="Covington Square"></img>
                    <div style={{ textAlign: "center" }}>
                        <a style={{ fontFamily: "Work Sans", fontSize: "10px", marginLeft: "auto", marginRight: "auto", display: "block" }} href="https://www.markchandlerphotography.com/">Mark Chandler Photography®</a>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ textAlign: "center", fontFamily: "Work Sans" }}>
                        Strickland & Strickland, LLP is a family-owned and managed law firm in Covington, Georgia since 1962. Founded by the late Charles D. Strickland and currently managed by his son, C. David Strickland, Strickland & Strickland, LLP has provided numerous clients with exceptional legal services ranging from Residential and Commerical Real State and Business Closings to General Civil Litigation and Adoptions. A detailed list of the firm's areas of specialty are also available from the Services link.
                </p>
                </Container>
            </Fade>
        </React.Fragment>
    )
}

export default LandingLayout;