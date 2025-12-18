import React from "react";
import { Link } from 'react-router-dom';
import './Pause.css';
import Envelope from "../../assets/envelope.png";

const Pause = () => {
    return (
        <section className="pause-container">
            <div className="pause-write-up">
                <h1>Wait. Take a Pause.</h1>
                <p>Now Imagine Opening Your Inbox to See:</p>
                <h2>“CONGRATS! YOU’RE HIRED”.</h2>
            </div>

            <div className="pause-image">
                <img src={Envelope} alt="" />
            </div>

            <div className="pause-centre">
                <div className="pause-center-writeup">
                    <div className="pause-line"></div>
                    <p>This is not a dream. This is what happens when clarity meets the right support. This is Elevouth.</p>
                </div>
                <Link to="/join-the-hub" className="pause-btn">
                    Join The Hub
                </Link>
            </div>
        </section>
    );
};

export default Pause;
