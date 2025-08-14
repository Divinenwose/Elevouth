import React, { useEffect } from "react";
import "./JointheHub.css";
import heroimage from "../../assets/hero-image1.png";
import TestimonialSection from "../../components/Testimonials/Testimonials.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Tick from "../../assets/tick-square.png";
import Sign from "../../assets/sign.png";

const JointheHub = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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
            <section className="hub-welcome">
                <div className="hub-welcome-content">
                    <h4>We Do not Just <span>Welcome You,</span> <br /> We<span> Root for You.</span></h4>
                    <p>Progress is easier when you’re not alone. The Hub surrounds you with the people, tools, and push you need to keep showing up.</p>
                </div>
                <div className="hub-cards-container">
                    <div className="hub-cards-one">
                        <div className="hubcards-content">
                            <h4>First Access to Elevouth Tools</h4>
                            <p className="hub-paragraph">We help you stay ahead with early access to our latest programs, events, tracks, and exclusive resources.</p>
                        </div>
                    </div>
                    <div className="hub-cards-two">
                        <div className="hubcards-content">
                            <h4>Weekly Challenges</h4>
                            <p className="hub-paragraph">We help you build momentum through bite-sized challenges that turn good intentions into habits that stick.</p>
                        </div>
                    </div>
                    <div className="hub-cards-three">
                        <div className="hubcards-content">
                            <h4> Accountability Pods</h4>
                            <p className="hub-paragraph">We help you build consistency by connecting you with peers who check in, cheer you on, and keep you aligned with your goals.</p>
                        </div>

                    </div>
                    <div className="hub-cards-four">
                        <div className="hubcards-content">
                            <h4>Celebrate Your Wins</h4>
                            <p className="hub-paragraph">We help you build self-belief by spotlighting your progress — no matter how small it may seem.</p>
                        </div>
                    </div>
                    <div className="hub-cards-five">
                        <div className="hubcards-content">                               
                            <h4>Real-Time Discussions</h4>
                            <p className="hub-paragraph">We help you build clarity by asking and answering real questions — in a space where support comes without gatekeeping.</p>
                        </div>
                    </div>
                    <div className="hub-cards-six">
                        <div className="hubcards-content">                               
                            <h4>From the Hub to Hiring Desks.</h4>
                            <p className="hub-paragraph">We help you land roles through curated connections to hiring companies looking for skilled, vetted talents like you.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="way">
                <div className="way-content">
                    <h2>Choose Your Way In</h2>
                    <p className="way-content-paragraph">Start small or go all in — however you grow, we are with you.</p>
                </div>
                <div className="way-flex-container">
                    <div className="way-flex-left">
                        <div className="way-content">
                            <p className="first-paragraph">Free Community</p>
                            <div className="way-naira">
                                <p className="naira"><sup>₦</sup><span className="zero">0</span></p>
                                <p className="billed">/Billed Monthly</p>
                            </div>
                            <div className="way-content-btn">
                                <a href="https://forms.gle/kR9PhDHTPqJFqUHq6" target="blank" className="way-join-the-hub">Join the Hub</a>
                            </div>
                        </div>
                        <div className="way-tick-container">
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Access to our vibrant community</p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Regular career conversations</p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Access to Elevouth weekly X space</p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Community challenges, polls & engagement</p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Peer support & motivation from hundreds of members</p>
                            </div>
                        </div>
                    </div>
                    <div className="way-flex-right">
                        <div className="way-flex-content">
                            <p className="first-paragraph">Elevouth Elites</p>
                            <div className="way-naira-right">
                                <div className="way-top">
                                    <p className="naira"><sup>₦</sup><span className="zero">6,000</span></p>
                                    <p className="billed">/Billed Monthly</p>
                                </div>
                                <p className="billed-right">(<sup>₦</sup>60,000 <span className="billed">/Billed Annually</span>)</p>
                            </div>
                            <div className="way-content-btn">
                                <a href="#" className="subscribe">Subscribe</a>
                            </div>
                        </div>
                        <div className="way-tick-container">
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Access to our private Slack community</p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Monthly 1-1 Career Consultation </p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Career accountability sessions & progress tracking</p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>First access to upcoming Elevouth programs</p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Bi-weekly expert-led training & advanced masterclasses</p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Priority access to job placements, internship opportunities, and partner programs</p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Monthly templates/tools (CV packs, Notion dashboards, etc.)</p>
                            </div>
                            <div className="way-tick">
                                <img src={Tick} alt="" />
                                <p>Exclusive Elites-only events, mentorship rooms, and behind-the-scenes updates</p>
                            </div>
                        </div>
                        <img className="sign" src={Sign} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <TestimonialSection />
            </section>
            <section className="stress">
                <div className="stress-container">
                    <div className="stress-content">
                        <h2>Stress No More!</h2>
                        <p>The Hub is open to anyone serious about growth. It’s free to <br /> join — all you need is the willingness to show up and grow.</p>
                    </div>
                    <div className="stress-btn">
                        <a href="https://forms.gle/kR9PhDHTPqJFqUHq6" target="blank" className="stress-btn-join">Join the Hub</a>
                        <a href="" className="stress-btn-explore">Explore Career Tools</a>
                    </div>
                </div>
            </section>
            <section>
                <Contact />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
};

export default JointheHub;
