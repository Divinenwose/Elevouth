import React from "react";
import "./Teams.css";
import team1 from "../../assets/team-one.png";
import team2 from "../../assets/team-two.png";
import team3 from "../../assets/team-three.png";
const Teams = () => {
    return(
        <div className="teams-container">
            <div className="teams-content">
                <div className="left-content">
                    <h2>Build Exceptional Teams,<br /> Without Stress</h2>
                    <p>Get access to skilled, vetted talents that are trained  with purpose, and ready to deliver.</p>
                </div>
                <div className="right-content">
                    <div className="right-content-buttons">
                        <a className="hire" href="#">Hire Talents</a>
                        <a className="partner" href="#">Become a Partner</a>
                    </div>
                </div>
            </div>
            <div className="team-cards">
                <div className="team-card-one">
                    <img src={team1} alt="" />
                    <h2>Hire with Confidence</h2>
                    <p>Need someone fast? We connect you with job-ready talents swiftly. From short-term roles to long-term hires. We help you scale with flexibility.</p>
                </div>
                <div className="team-card-two">
                    <img src={team2} alt="" />
                    <h2>Vetted for Impact</h2>
                    <p>Every Elevouth talent goes through hands-on training, expert feedback, and real-world projects. You are not guessing, you are hiring with proof.</p>
                </div>
                <div className="team-card-three">
                    <img src={team3} alt="" />
                    <h2>Hire with Confidence</h2>
                    <p>We do not just train for skill, we train for character. Elevouth talents are prepared, professional, and passionate about making a difference.</p>
                </div>
            </div>
        </div>
    )
}

export default Teams;