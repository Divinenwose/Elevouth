import React from "react";
import "./About.css"
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import abthero from "../../assets/hero-image1.png"
import Tolu from "../../assets/tolu-ab.png";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import yellow from "../../assets/yellow.png";
import blue from "../../assets/blue.png";
import green from "../../assets/green.png";
import pink from "../../assets/pink.png";

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });


    return (
        <section className="about">
            <div className="about-content">
                <div className="about-flex">
                    <div className="about-flex-left">
                        <img src={abthero} alt="" />
                    </div>
                    <div className="about-flex-right">
                        <h2>Beyond Training and Talent placements</h2>
                        <p>Since 2024, Elevouth has helped hundreds of young professionals across Africa and beyond kickstart their careers, while partnering with startups and companies to build diverse,
                            remote-ready talent pipelines for the future of work.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-profile">
                <div className="about-profile-flex">
                    <div className="flex-profile-writeup">
                        <p>Elevouth began with a simple insight: Most people have potential, but lack direction. Most teams want talent, but lack access. </p>
                        <p> Founded by Toluwani Ogundele, Elevouth was created to solve both sides of the problem, helping individuals find career clarity and in-demand skills, while also enabling startups and companies to discover, nurture, and hire job-ready talent.</p>
                        <p> We started with virtual trainings and community events, but quickly grew into a full ecosystem, offering short courses, immersive programs, talent placement support, career tech tools (like our Career Compass), careers services and strategic partnerships with hiring teams and founders across sectors.</p>
                        <p> From young professionals exploring new paths, to startups building remote-first teams, Elevouth is redefining how the modern workforce is built, and where it comes from.</p>
                        <p>We are not just building careers. <br />We are building a movement. <br /> And you are invited. </p>
                    </div>
                    <div className="flex-profile-image">
                        <img src={Tolu} alt="Toluwani" />
                    </div>
                </div>
            </div>
            <div className="mission">
                <div className="mission-cards">
                    <div className="our-mission">
                        <h2>Our  Mission</h2>
                        <p>To build the future of work by empowering individuals with clarity, skills, and access to global opportunities, while helping startups and companies find, train, and retain the right talent to grow.</p>
                    </div>
                    <div className="our-vision">
                        <h2>Our Vision</h2>
                        <p>To become the world’s most trusted platform for workforce innovation, connecting talent and teams, learning and placement, purpose and performance.</p>
                    </div>
                </div>
            </div>
            <div className="values">
                <div className="values-container">
                    <div className="core-values">
                        <h2>Core Values</h2>
                    </div>
                </div>
                <div className="values-card">
                    <div className="card-one">
                        <div className="card-image">
                            <img src={yellow} alt="" />
                        </div>
                        <h2>Clarity at the Core</h2>
                        <p>We help people and companies make better career and hiring decisions through intentional guidance, not noise.</p>
                    </div>
                    <div className="card-two">
                        <div className="card-image">
                            <img src={yellow} alt="" />
                            <img src={blue} alt="" />
                        </div>
                        <h2>Empowerment, Not <br /> Hype</h2>
                        <p>Whether you are learning a new skill or building a new team, we believe in equipping people with what truly works.</p>
                    </div>
                    <div className="card-three">
                        <div className="card-image">
                            <div className="top">
                                <img src={yellow} alt="" />
                                <img src={blue} alt="" />
                            </div>
                            <img src={green} alt="" />
                        </div>
                        <h2>Innovation with Intent</h2>
                        <p>We don’t chase trends. We build tools, programs, and solutions that address real needs in the workforce.</p>
                    </div>
                    <div className="card-four">
                        <div className="card-image">
                            <div className="top">
                                <img src={yellow} alt="" />
                                <img src={blue} alt="" />
                            </div>
                            <div className="bottom">
                                <img src={green} alt="" />
                                <img src={pink} alt="" />
                            </div>
                        </div>
                        <h2>Community-Fueled</h2>
                        <p>Growth happens best when people are connected. We foster spaces for collaboration, support, and progress.</p>
                    </div>
                </div>
            </div>
            <div className="impact" ref={ref}>
                <div className="impact-container">
                    <h2>Our Impact</h2>
                </div>

                <div className="impact-cards">
                    <div className="im-card-one">
                        <h2>
                            {inView && <CountUp start={0} end={4} duration={2} />}+
                        </h2>
                        <p>Events Monthly</p>
                    </div>

                    <div className="im-card-two">
                        <h2>
                            {inView && <CountUp start={0} end={200} duration={2.5} />}+
                        </h2>
                        <p>Learners Reached</p>
                    </div>

                    <div className="im-card-three">
                        <h2>
                            {inView && <CountUp start={0} end={50} duration={2} />}+
                        </h2>
                        <p>Talent Placed in Roles</p>
                    </div>

                    <div className="im-card-four">
                        <h2>
                            {inView && <CountUp start={0} end={250} duration={2.5} />}+
                        </h2>
                        <p>Active Community Members</p>
                    </div>
                </div>
            </div>
            <div>
                <Testimonials />
            </div>
            <div className="stress">
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
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </section >
    )
}

export default About;