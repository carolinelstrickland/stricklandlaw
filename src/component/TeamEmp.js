import React, { useState, Component } from "react";
import "./style/teamemp.css";
import Zoom from "react-reveal/Zoom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Slide from "react-reveal/Slide"

class TeamEmp extends Component {
    state = { show: true }
    render() {
        return (
            <React.Fragment>

                {/* <Zoom> */}

                {/* <div style={{ backgroundColor: "gray", fontFamily: "Work Sans" }}> */}
                <Container fluid="md" style={{ fontFamily: "Work Sans", border: "solid", backgroundColor:"white" }}>
                    <div className="bgImg"></div>
                    <Slide right>
                        <Row className="bgColor">
                            <Col>
                                <div className="row" style={{ textAlign: "center" }}>
                                    <div className="col">
                                        <h3>
                                            Founding Partner
                                    </h3>
                                        <h4>
                                            Charles D. Strickland

                                    </h4>
                                        <img src="..//img/3partners.jpg"
                                            style={{ height: "500px", width: "800px", borderRadius: "5%" }}></img>
                                        <br></br>
                                        <p style={{ fontFamily: "Work Sans", fontWeight: "bold", fontSize: "20px" }}>1962-2019</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Slide>

                    <div className="bgImg"></div>
                    <Slide right>
                        <Row>
                            <Col>
                                <div className="row" style={{ textAlign: "center" }}>
                                    <div className="col">
                                        <h3>
                                            Managing Partner
                            </h3>
                                        <h4>
                                            C. David Strickland

                            </h4>
                                        <img src="..//img/IMG_1256.jpeg"
                                            style={{ height: "500px", width: "500px", borderRadius: "5%" }}></img>
                                        <br></br>
                                        <p className="emailText" style={{padding:"20px"}}> Email me
                                            <span class="iconify" data-icon="bi:arrow-bar-right" data-inline="false"></span>
                                            <a href={`mailto:David.strickland@strickland-law.com`}>
                                                <span
                                                    className="iconify language-icon mr-5"
                                                    data-icon="ic:outline-email"
                                                    data-inline="false"
                                                    style={{ color: "black", height: "40px", width: "40px" }}
                                                ></span></a>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Slide>
                    <Slide right>
                        <Row>
                            <Col>
                                <div style={{ textAlign: "center" }}>
                                    <div className="col">
                                        <h3>
                                            Paralegal
                                    </h3>
                                        <h4>
                                            Heather E. Adamson

                                    </h4>
                                        <img src="..//img/HEA Office.jpg" style={{ height: "500px", width: "500px", borderRadius: "5%" }}></img>
                                        <br></br>
                                        <p className="emailText" style={{padding:"20px"}}> Email me
                                        <span class="iconify" data-icon="bi:arrow-bar-right" data-inline="false"></span>
                                            <a href={`mailto:heather.adamson@strickland-law.com`}>
                                                <span
                                                    className="iconify language-icon mr-5"
                                                    data-icon="ic:outline-email"
                                                    data-inline="false"
                                                    style={{ color: "black", height: "40px", width: "40px" }}
                                                ></span></a>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Slide>
                    <div className="bgImg"></div>
                    <Slide right>
                        <Row>
                            <Col>
                                <div className="row" style={{ textAlign: "center" }}>
                                    <div className="col">
                                        <h3>
                                            Legal Assistant
                            </h3>
                                        <h4>
                                            Chelsey C. whisnant

                            </h4>
                                        <img src="..//img/IMG_1248.jpeg" style={{ height: "500px", width: "500px", borderRadius: "5%" }}></img>
                                        <br></br>
                                        <p className="emailText" style={{padding:"20px"}}>
                                            Email me
                                        <span class="iconify" data-icon="bi:arrow-bar-right" data-inline="false"></span>
                                            <a href={`mailto:chelsey.whisnant@strickland-law.com`}>
                                                <span
                                                    className="iconify language-icon mr-5"
                                                    data-icon="ic:outline-email"
                                                    data-inline="false"
                                                    style={{ color: "black", height: "40px", width: "40px" }}
                                                ></span></a>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Slide>
                  
                    <Slide right>
                        <Row>
                            <Col>
                                <div style={{ textAlign: "center" }}>
                                    <div className="col">
                                        <h3>
                                            Legal Assistant
                                    </h3>
                                        <h4>
                                            Carol J. Ledford

                                    </h4>
                                        <img src="..//img/FullSizeRender.jpeg"
                                            style={{ height: "600px", width: "500px", borderRadius: "5%" }}></img>
                                        <br></br>
                                        <p className="emailText" style={{padding:"20px"}}>
                                            Email me
                                        <span class="iconify" data-icon="bi:arrow-bar-right" data-inline="false"></span>
                                            <a href={`mailto:carol.ledford@strickland-law.com`}>
                                                <span
                                                    className="iconify language-icon mr-5"
                                                    data-icon="ic:outline-email"
                                                    data-inline="false"
                                                    style={{ color: "black", height: "40px", width: "40px" }}
                                                ></span></a>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Slide>

                </Container>




                {/* </div> */}
                {/* </Zoom> */}
            </React.Fragment>

        )

    }
}

export default TeamEmp;