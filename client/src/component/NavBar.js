import React from "react";
import {Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
    return (
        <React.Fragment>
            <Navbar style={{ fontFamily: "Work Sans", backgroundColor: "#F5F5F5", width: "100%",}} expand="lg">
                {/* <Navbar.Brand href="#home">Strickland and Strickland, LLP</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{ fontFamily: "Work Sans" }} className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/team">Meet Our Team</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/links">Helpful Links</Nav.Link>
                        <Nav.Link href="/privacypolicy">Privacy Policy</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default NavBar;
