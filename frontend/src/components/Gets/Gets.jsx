import React from "react";
import "./Gets.css";
import images from "../../assets/images.png"

const Gets = () => {
    return(
        <div className="gets-container">
            <div className="gets-content">
                <div className="gets-writeup-container">
                    <h2>Learn What Gets You Hired</h2>
                    <div className="gets-write-up-container-links">
                        <a href="#">Explore Skill Tracks</a>
                    </div>
                </div>
                <div className="right-writeup">
                    <p>Every course at The Academy is built to get you hired. With real projects, expert feedback, and a portfolio that stands out.</p>
                    <div className="gets-write-up-container-responsive">
                        <a href="#">Explore Skill Tracks</a>
                    </div>
                </div>
            </div>
            <div className="gets-card">
                <div className="gets-card-one">
                    <div className="cards-side">
                        <p className="fully">Fully Online </p>
                        <p className="project">Project-Based</p>
                    </div>
                    <div className="bottom">
                        <div className="bottom-text">
                            <h2>Digital Marketing</h2>
                            <p>Learn how to craft digital strategies, run effective campaigns, and master tools like SEO, social media, and email marketing that drive real results.</p>
                        </div>
                        <div className="bottom-links">
                            <a href="#">View Track</a>
                        </div>
                    </div>
                    <div className="line-divider"></div>
                    <div className="reviews">
                        <img src={images} alt="" />
                        <p>200+ learners trained</p>
                    </div>
                </div>
                <div className="gets-card-two">
                    <div className="cards-side">
                        <p className="fully">Fully Online </p>
                        <p className="project">Project-Based</p>
                    </div>
                    <div className="bottom">
                       <div className="bottom-text">
                            <h2>UX Design</h2>
                            <p>Go from idea to interface. Learn how to design digital experiences that are intuitive, accessible, and user-focused.</p>
                       </div>
                       <div className="bottom-links">
                            <a href="#">View Track</a>
                        </div>
                    </div>
                    <div className="line-divider"></div>
                    <div className="reviews">
                        <img src={images} alt="" />
                        <p>200+ learners trained</p>
                    </div>
                </div>
                <div className="gets-card-three">
                    <div className="cards-side">
                        <p className="fully">Fully Online </p>
                        <p className="project">Project-Based</p>
                    </div>
                    <div className="bottom">
                        <h2>Project Management</h2>
                        <p>Lead with confidence. Learn how to plan, manage, and execute projects across industries using globally recognized frameworks.</p>
                        <div className="bottom-links">
                            <a href="#">View Track</a>
                        </div>
                    </div>
                    <div className="line-divider"></div>
                    <div className="reviews">
                        <img src={images} alt="" />
                        <p>200+ learners trained</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gets;