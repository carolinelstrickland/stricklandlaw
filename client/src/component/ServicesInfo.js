import React from "react";
import Fade from "react-reveal/Fade"
import "./style/services.css"

const ServicesInfo = () => {
    return (
        <Fade bottom>
            <div className="servicesbg" style={{ fontFamily: "Work Sans", padding: "20px" }}>
                
                <h1 className="servicesH1" style={{fontWeight: "bold", fontFamily: "Work Sans"}}> Services </h1>
                <div>
                    <p className="res" style={{ textAlign: "center", fontWeight: "bold", fontFamily: "Work Sans", textDecoration: "underline" }}>
                        Residential and Commercial Real Estate and Business Closings, Transactions and Litigation
                    </p>
                        <li className="servicesLi" style={{padding:"10px", listStyleType:"none"}}>
                            Our firm is equipped to handle all aspects of both residential and commercial real estate closings, as well as business transactions, including: title examination, document preparation, settlement and disbursement services; qualifying to do business with new lenders; entity formation, foreclosure, contract preparation and issuance of title insurance through our issuing agency at Chicago Title Insurance Company.
                        </li>
                        <br></br>
                    
                    <p className="res" style={{ textAlign: "center", fontFamily: "Work Sans", fontWeight: "bold", textDecoration: "underline"  }}>
                        Wills and Estate Planning
                    </p>
                        <li style={{padding:"10px", listStyleType:"none"}}>
                            We have experience and valuable insight in all aspects of estate planning, including: Wills, Trusts, Financial Power of Attorney and Advanced Directives, as well as asset and liability protection. We have also been drafting wills since 1962, and are available to assist you in addressing legal and financial issues you may face when loved one pass away. We are also have experience with guardianship or conservatorship cases in the probate court.
                        </li>
                        <br></br>
                    <p className="res" style={{ textAlign: "center", fontFamily: "Work Sans", fontWeight: "bold", textDecoration: "underline" }}>
                        Corporate Law and Business Formation
                    </p>
                    <li style={{padding:"10px", listStyleType:"none"}}>
                            We are happy to assist you with a variety of services for medium and small businesses alike, including formation of corporations, limited liability companies and other entities.
                    </li>
                    <br></br>
                    <p className="res" style={{ textAlign: "center", fontFamily: "Work Sans", fontWeight: "bold", textDecoration: "underline" }}>
                        Local Government Law
                    </p>
                    <li style={{padding:"10px", listStyleType:"none"}}>
                            We now or formerly have represented a number of localities in the Newton and Rockdale Counties and vicinity.
                    </li>
                    <br></br>
                    <p className="res" style={{ textAlign: "center", fontFamily: "Work Sans", fontWeight: "bold", textDecoration: "underline" }}>
                        General Civil Litigation
                    </p>
                    <li style={{padding:"10px", listStyleType:"none"}}>
                            We have represented individuals and businesses in civil litigation matters, including real estate related litigation, commercial disputes, and a number of other areas.
                    </li>
                    <br></br>
                    <p className="res" style={{ textAlign: "center", fontFamily: "Work Sans", fontWeight: "bolder", textDecoration: "underline" }}>
                        Adoptions
                    </p>
                    <li style={{padding:"10px", listStyleType:"none"}}>
                            As a former Assistant Attorney General handling matters before the Newton County Juvenile Court, David Strickland has completed many private and state adoptions in Newton and contiguous counties.
                    </li>
                </div>

            </div>
        </Fade>
    )
}

export default ServicesInfo;