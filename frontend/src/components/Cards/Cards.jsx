import React from "react";
import './Cards.css'; 
import Arrow from "../../assets/learn-arrow.png";

const Cards = () => {
  return (
    <section className="cards-container">
      <div className="cards-content-container">
        <h2>Here is What Gets You to That Inbox Moment.</h2>
        <p>From self-discovery to in-demand skills, community, and career support. We provide all you need. </p>
      </div>
      <div className="main-cards-container">
        <div className="main-cards-one">
            <div className="maincards-content">
                <h1>The Academy</h1>
                <h2>Learn what actually gets you hired.</h2>
                <p className="main-paragraph">Project-based, industry-relevant training designed with real recruiters in mind.</p>
            </div>
            <div className="learn-more">
                <p><img src={Arrow} alt="" />Learn More</p>
            </div>
        </div>
        <div className="main-cards-two">
            <div className="maincards-content">
                <h1>The Hub</h1>
                <h2>Grow with people like you</h2>
                <p className="main-paragraph">A vibrant community to ask questions, share wins, and stay motivated together.</p>
            </div>
            <div className="learn-more">
                <p><img src={Arrow} alt="" />Learn More</p>
            </div>
        </div>
        <div className="main-cards-three">
            <div className="maincards-content">
                <h1>Career Services</h1>
                <h2>You will not face it alone.</h2>
                <p className="main-paragraph">From resume reviews to mock interviews, our team help you show up as your best self.</p>
            </div>
            <div className="learn-more">
                <p><img src={Arrow} alt="" />Learn More</p>
            </div>
        </div>
        <div className="main-cards-four">
            <div className="maincards-content">
                <h1>Career Compass</h1>
                <h2>Pick the right skills based on who you are.</h2>
                <p className="main-paragraph-two">Your unique strengths guide the way, learn what fits you best to grow with purpose.</p>
            </div>
            <div className="learn-more">
                <p><img src={Arrow} alt="" />Learn More</p>
            </div>
        </div>
        <div className="main-cards-five">
            <div className="maincards-content">
                <h1>Talent Placement</h1>
                <h2>We connect you with companies that value talents</h2>
                <p className="main-paragraph-two">At Elevouth, we match you with hiring organizations and real job opportunities, locally and globally. So your growth does not end with learning, it leads to impact.</p>
            </div>
            <div className="learn-more">
                <p><img src={Arrow} alt="" />Learn More</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
