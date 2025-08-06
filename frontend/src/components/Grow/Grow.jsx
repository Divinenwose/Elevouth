import React from "react";
import { Link } from 'react-router-dom';
import "./Grow.css";
import Growimg from "../../assets/get-image.png";

const Grow = () => {
    return(
        <div className="grow-container">
            <div className="grow-content">
                <div className="grow-image-wrapper">
                    <img src={Growimg} alt="Grow visual" />
                </div>
                <div className="grow-text">
                    <h2>Grow With People Like You</h2>
                    <p>
                        The Hub connects you with people on the same journey. 
                        Stay motivated, ask real questions, and grow together. No  more doing it alone.
                    </p>
                    <div className="hub-wrapper">
                        <Link to="/join-the-hub" className="hub">
                            Join the Hub
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grow;
