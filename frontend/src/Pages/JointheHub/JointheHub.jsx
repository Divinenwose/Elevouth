import React from "react";
import "./JointheHub.css";
import heroimage from "../../assets/hero-image1.png"

const JointheHub = () => {
    return(
        <div className="join-the-hub">
            <section className="jth-hero">
                <div className="jth-hero-container">
                    <div className="jth-content">
                        <h2>Grow With People Like You.</h2>
                        <p>You don’t have to figure it out alone. The Hub is your safe space to ask questions, share wins, stay accountable, and build momentum with others on the same path.</p>
                        <div className="hub-wrapper">
                            <a href="https://forms.gle/kR9PhDHTPqJFqUHq6" target="blank" className="hub">Join the Hub</a>
                        </div> 
                    </div>
                    <div className="jth-image">
                        <img src={heroimage} alt="woman on computer" />
                    </div>
                </div>
            </section>
        </div>
    )
};

export default JointheHub;
