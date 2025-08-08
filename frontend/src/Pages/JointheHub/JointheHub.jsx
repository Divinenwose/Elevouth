import React from "react";
import "./JointheHub.css";
import heroimage from "../../assets/hero-image1.png";
import TestimonialSection from "../../components/Testimonials/Testimonials.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";

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

            </section>
            <section>
                <TestimonialSection />
            </section>
            <section className="stress">

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
