import React from "react";
import { Container, Row } from "react-bootstrap";

function LandingLayout() {
    return (
        <React.Fragment>
            <Container fluid>
                <h3 style={{ textAlign: "center", fontFamily: "Work Sans" }}>
                    Strickland & Strickland, LLP
                </h3>
                <img style={{ paddingTop: "10px", marginRight: "auto", marginLeft: "auto", display: "block" }} src="https://i.pinimg.com/originals/19/f4/de/19f4de41f41a880b88fd7c4bca036d11.jpg" alt="Covington Square"></img>
                <p style={{ textAlign: "center", fontFamily: "Work Sans" }}>
                    Strickland & Strickland, LLP is a family-owned and managed law firm in Covington, Georgia since 1962. Founded by the late Charles D. Strickland and currently managed by his son, C. David Strickland, Strickland & Strickland, LLP has provided numerous clients with exceptional legal services ranging from Residential and Commerical Real State and Business Closings to General Civil Litigation and Adoptions. A detailed list of the firm's areas of specialty are also available from the Services link.
                </p>
            </Container>
        </React.Fragment>
    )
}

export default LandingLayout;