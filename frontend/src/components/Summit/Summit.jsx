import React from "react";
import "./Summit.css";
import Summitimg from "../../assets/global-image.png";
import Circle from "../../assets/circle.png";

const Submit = () => {
    return(
        <div className="summit-container">
            <div className="summit-content">
                <div className="summit-image-wrapper">
                    <img src={Summitimg} alt="" />
                </div>
                <div className="summit-content">
                    <h4>Something Big Is Coming!</h4>
                    <div className="summit-flex">
                        <p>Your Next Opportunity Could Be One Summit Away.</p>
                        <a href="#" className="reserve-btn"> Reserve Your Spot</a>
                    </div>
                    <div className="global">
                        <h2>Global Talent Summit 2025</h2>
                        <img src={Circle} className="circle" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Submit;