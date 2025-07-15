import React from "react";
import "./Candidates.css";
import CV from "../../assets/cv.png";
import In from "../../assets/in.png";
import chat from "../../assets/chat.png";
import career from "../../assets/career.png";

const Candidates = () => {
    return(
        <div className="candidate-container">
            <div className="candidates-content-container">
                <div className="candidates-content">
                    <h2>Be the Candidate Employers Can  not Ignore</h2>
                    <div className="career-btn-wrapper">
                        <a href="#" className="career-btn">Get Career Support</a>
                    </div>
                </div>
                <div className="candidates-paragraph">
                    <p>From résumé reviews to mock interviews, we help you refine your strengths, tell your story, and show up with the kind of confidence that gets noticed.</p>
                    <div className="career-btn-wrapper-responsive">
                        <a href="#" className="career-btn">Join the Hub</a>
                    </div>
                </div>
            </div>
            <div className="candidates-grid">
                <div className="candidates-card-one">
                    <img src={CV} alt="" />
                    <h4>CV Optimization</h4>
                    <p>We help you create an ATS-friendly, recruiter-ready CV that highlights what truly sets you apart.</p>
                </div>
                <div className="candidates-card-two">
                    <img src={In} alt="" />
                    <h4>LinkedIn Optimization</h4>
                    <p>Our SEO-focused LinkedIn revamp aligns with your CV and puts you in front of the right roles.</p>
                </div>
                <div className="candidates-card-three">
                    <img src={chat} alt="" />
                    <h4>Interview Preparation</h4>
                    <p>Get coached on what to say, how to say it, and show up like a pro in every  interview.</p>
                </div>
                <div className="candidates-card-four">
                    <img src={career} alt="" />
                    <h4>Career Advisory</h4>
                    <p>Our advisory sessions align your strengths with a clear, actionable career plan.</p>
                </div>
            </div>
        </div>
    );
}

export default Candidates;