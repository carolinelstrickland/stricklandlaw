import React from "react";
import PrivacyPol from "../component/PrivacyPol.js"
import PrivacyPolForm from "../component/PrivacyPolForm"

const PrivacyPolicy = () => {
    return (
        <div>
            <h1>
                Privacy Policy
            </h1>

            <div>
                <PrivacyPol/>
                <PrivacyPolForm/>
            </div>

        </div>
    )
}

export default PrivacyPolicy;