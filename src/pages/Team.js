import React, { useState, Component } from 'react';
import { ButtonGroup, Button, Modal, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import TeamDetailsModal from "../components/TeamDetailsModal"

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
          deps: {},
          detailsModalShow: false,
        };
      }
    
      render() {
        // let detailsModalShow = (data) => {
        //   this.setState({ detailsModalShow: true, deps: data });
        // };
    
        // let detailsModalClose = () => this.setState({ detailsModalShow: false });
        
            return (
                <div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <h3>
                            Legal Assistant
                        </h3>
                        <p>
                            Chelsey C. whisnant

                        </p>
                        <img src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fqnimate.com%2Fwp-content%2Fuploads%2F2014%2F03%2Fimages2.jpg&imgrefurl=http%3A%2F%2Fqnimate.com%2Funderstanding-html-img-tag%2F&tbnid=RYBz6TYw2D7ZZM&vet=12ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ..i&docid=2QpCn8mhLjh9DM&w=800&h=400&q=img&ved=2ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ"></img>
                        <p>Blub</p>
                        <a href={`mailto:chelsey.whisnant@strickland-law.com`}>Contact</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <h3>
                            Legal Assistant
                        </h3>
                        <p>
                            Carol J. Ledford

                        </p>
                        <img src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fqnimate.com%2Fwp-content%2Fuploads%2F2014%2F03%2Fimages2.jpg&imgrefurl=http%3A%2F%2Fqnimate.com%2Funderstanding-html-img-tag%2F&tbnid=RYBz6TYw2D7ZZM&vet=12ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ..i&docid=2QpCn8mhLjh9DM&w=800&h=400&q=img&ved=2ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ"></img>
                        <p>Blurb</p>
                        <a href={`mailto:carol.ledford@strickland-law.com`}>Contact</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <h3>
                            Paralegal
                        </h3>
                        <p>
                            Heather E. Adamson

                        </p>
                        <img src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fqnimate.com%2Fwp-content%2Fuploads%2F2014%2F03%2Fimages2.jpg&imgrefurl=http%3A%2F%2Fqnimate.com%2Funderstanding-html-img-tag%2F&tbnid=RYBz6TYw2D7ZZM&vet=12ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ..i&docid=2QpCn8mhLjh9DM&w=800&h=400&q=img&ved=2ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ"></img>
                        <p>Blurb</p>
                        <a href={`mailto:heather.adamson@strickland-law.com`}>Contact</a>
                    </div>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4"
                //   key={projects.title}
                  style={{ cursor: "pointer" }}
                >
    
                  <span className="portfolio-item d-block">
                    {/* <div className="foto" onClick={() => detailsModalShow()}>
                      <div> */}
                        {/* <img
                          src={"https://www.google.com/imgres?imgurl=http%3A%2F%2Fqnimate.com%2Fwp-content%2Fuploads%2F2014%2F03%2Fimages2.jpg&imgrefurl=http%3A%2F%2Fqnimate.com%2Funderstanding-html-img-tag%2F&tbnid=RYBz6TYw2D7ZZM&vet=12ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ..i&docid=2QpCn8mhLjh9DM&w=800&h=400&q=img&ved=2ahUKEwjiuIfkuYHuAhXiGd8KHXFNB_kQMygGegUIARDMAQ"}
                          alt="projectImages"
                          height="230"
                          style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                        /> */}
                        {/* <br /> */}
                        {/* <p className="project-title-settings mt-3">
                         
    
                        </p> */}
                      {/* </div>
                    </div> */}
                  </span>
                </div>
                </div>
             
            );
    
        // return (
        //   <section id="portfolio">
        //     <div className="col-md-12">
        //       <h1 className="section-title" style={{ color: "black" }}>
        //         {/* <span>{sectionName}</span> */}
        //       </h1>
        //       <div className="col-md-12 mx-auto">
        //         {/* <div className="row mx-auto">{projects}</div> */}
        //       </div>
        //       <TeamDetailsModal
        //         show={this.state.detailsModalShow}
        //         onHide={detailsModalClose}
        //         data={this.state.deps}
        //       />
        //     </div>
        //   </section>
        // );
      }
}

export default Team;