import React, { Component } from "react";
import "./style/teamemp.css"

class TeamEmp extends Component {
    render() {
        return (

            <div style={{backgroundColor: "gray"}}>
                <div className="container float-left">
                    <div className="row firstrow">
                        <div className="col">
                            <h3>
                                Legal Assistant
                            </h3>
                            <h4>
                                Chelsey C. whisnant

                            </h4>
                            <img src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fqnimate.com%2Fwp-content%2Fuploads%2F2014%2F03%2Fimages2.jpg&imgrefurl=http%3A%2F%2Fqnimate.com%2Funderstanding-html-img-tag%2F&tbnid=RYBz6TYw2D7ZZM&vet=12ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ..i&docid=2QpCn8mhLjh9DM&w=800&h=400&q=img&ved=2ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ"></img>
                            <br></br>
                            <a href={`mailto:chelsey.whisnant@strickland-law.com`}>
                                <span
                                    className="iconify language-icon mr-5"
                                    data-icon="ic:outline-email"
                                    data-inline="false"
                                    style={{ color: "black", height:"40px", width:"40px" }}
                                ></span></a>
                        </div>
                    </div>
                </div>
                <div className="container float-right">
                    <div className="secondrow">
                        <div className="col">
                            <h3>
                                Legal Assistant
                            </h3>
                            <h4>
                                Carol J. Ledford

                            </h4>
                            <img src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fqnimate.com%2Fwp-content%2Fuploads%2F2014%2F03%2Fimages2.jpg&imgrefurl=http%3A%2F%2Fqnimate.com%2Funderstanding-html-img-tag%2F&tbnid=RYBz6TYw2D7ZZM&vet=12ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ..i&docid=2QpCn8mhLjh9DM&w=800&h=400&q=img&ved=2ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ"></img>
                            <br></br>
                            <a href={`mailto:carol.ledford@strickland-law.com`}>
                                <span
                                    className="iconify language-icon mr-5"
                                    data-icon="ic:outline-email"
                                    data-inline="false"
                                    style={{ color: "black", height:"40px", width:"40px"  }}
                                ></span></a>
                        </div>
                    </div>
                </div>
                <div className="container float-right">
                    <div className="thirdrow">
                        <div className="col">
                            <h3>
                                Paralegal
                            </h3>
                            <h4>
                                Heather E. Adamson

                            </h4>
                            <img src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fqnimate.com%2Fwp-content%2Fuploads%2F2014%2F03%2Fimages2.jpg&imgrefurl=http%3A%2F%2Fqnimate.com%2Funderstanding-html-img-tag%2F&tbnid=RYBz6TYw2D7ZZM&vet=12ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ..i&docid=2QpCn8mhLjh9DM&w=800&h=400&q=img&ved=2ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ"></img>
                            <br></br>
                            <a href={`mailto:heather.adamson@strickland-law.com`}>
                                <span
                                    className="iconify language-icon mr-5"
                                    data-icon="ic:outline-email"
                                    data-inline="false"
                                    style={{ color: "black", height:"40px", width:"40px"  }}
                                ></span></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default TeamEmp;