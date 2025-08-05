import React, { useEffect } from "react";
import './Events.css';
import Calendar from "../../assets/calendar.png";
import Clock from "../../assets/clock.png";
import Location from "../../assets/location.png";
import Eventhero from "../../assets/event-hero.png";
import Timerdots from "../../assets/timer dots.png";
import Tick from "../../assets/tick-square.png";
import Sponsors from "../../assets/sponsors.png";
import Partners from "../../assets/partner.png";
import PastLeft from "../../assets/pastleft.png";
import PastRight from "../../assets/pastright.png";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const Events = () => {

    useEffect(() => {
        const target = new Date("September 19, 2025 10:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference < 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            document.getElementById("days").innerText = days.toString().padStart(2, "0");
            document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
            document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="events-container">
            <section className="evnt-top">
                <div className="top-write-up">
                    <div className="top-content">
                        <div className="time">
                            <img src={Calendar} alt="calendar-icon" />
                            <p>Sep. 19th-20th, 2025</p>
                        </div>
                        <div className="dots"></div>
                        <div className="clock">
                            <img src={Clock} alt="clock-icon" />
                            <p>10:00 AM (WAT)</p>
                        </div>
                        <div className="dots"></div>
                        <div className="location">
                            <img src={Location} alt="location-icon" />
                            <p>Virtual —  YouTube Live</p>
                        </div>
                    </div>
                    <h2>Global Talent Summit 2025</h2>
                    <div className="global-btn">
                        <a href="https://lu.ma/ig51d4z2" target="blank" className="reserve">Reserve Your Spot</a>
                        <a href="" className="sponsor">Become a Sponsor</a>
                    </div>
                </div>

                <div className="event-hero-container">
                    <div className="hero-content">
                        <img src={Eventhero} alt="" />
                    </div>
                    <div className="countdown-overlay">
                        <div className="countdown-item">
                            <div className="count-value" id="days">00</div>
                            <div className="count-label">Days</div>
                        </div>
                        <div className="timer-dots">
                            <img src={Timerdots} alt="" />
                        </div>
                        <div className="countdown-item">
                            <div className="count-value" id="hours">00</div>
                            <div className="count-label">Hours</div>
                        </div>
                        <div className="timer-dots">
                            <img src={Timerdots} alt="" />
                        </div>
                        <div className="countdown-item">
                            <div className="count-value" id="minutes">00</div>
                            <div className="count-label">Minutes</div>
                        </div>
                        <div className="timer-dots">
                            <img src={Timerdots} alt="" />
                        </div>
                        <div className="countdown-item">
                            <div className="count-value" id="seconds">00</div>
                            <div className="count-label">Seconds</div>
                        </div>
                    </div>
                </div>
                <div className="event-about">
                    <div className="event-about-content-left">
                        <p>
                            The Elevouth Global Talent Summit 2025 is a 2-day virtual event connecting talents, recruiters, and leaders to explore the evolving future of work. <br /> <br />
                            Through expert panels, breakout sessions, and live insights, attendees will gain clarity, tools, and global opportunities to grow their careers and build meaningful impact.
                        </p>
                    </div>
                    <div className="event-about-content-right">
                        <div className="perks">
                            <img src={Location} alt="" />
                            <p>Perks of Attending</p>
                        </div>
                        <div className="evnt-flex-container">
                            <div className="event-flex-one">
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Breakout Sessions</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>5+ Global Speakers</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Talent Market Insights</p>
                                </div>
                            </div>
                            <div className="event-flex-two">
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Giveaways</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>1000+ Attendees</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Recruiter Networking</p>
                                </div>
                            </div>
                            <div className="event-flex-three">
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Certificates</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Expert Panels</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Career Tools Access</p>
                                </div>
                            </div>
                            <div className="event-flex-four">
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Live Q&As</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Growth Tips & Clarity</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Early Academy Access</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reserve-btn-container">
                    <a href="https://lu.ma/ig51d4z2" target="blank" className="reserve">Reserve Your Spot</a>
                </div>
            </section>
            <section className="sponsors">
                <div className="sponsors-container">
                    <div className="sponsors-content">
                        <h4>Meet Our Sponsors & Partners</h4>
                    </div>
                    <div className="sponsors-links">
                        <img src={Sponsors} alt="" />
                    </div>
                    <div className="sponsors-links">
                        <img src={Sponsors} alt="" />
                    </div>
                    <div className="sponsors-links">
                        <img src={Sponsors} alt="" />
                    </div>
                    <div className="sponsors-links">
                        <img src={Sponsors} alt="" />
                    </div>
                    <div className="sponsors-links">
                        <img src={Sponsors} alt="" />
                    </div>
                </div>
            </section>
            <section className="voices">
                <div className="voices-writeup">
                    <h4>Meet the Voices Shaping the Future</h4>
                    <p>Get ready to hear from bold voices, brilliant thinkers, and game-changers redefining the future of work.</p>
                </div>
            </section>
            <section className="partners">
                <div className="partners-content">
                    <div className="partners-left">
                        <h2>Want to Sponsor or Partner with us?</h2>
                        <p>Be part of the movement shaping tomorrow’s talent. Elevouth invites organizations, brands, and communities to support and gain visibility at Africa’s most impactful career summit.</p>
                        <div className="partner-links">
                            <a href="" className="become-cta">Become a Sponsor</a>
                            <a href="" className="partner-cta">Partner with Us</a>
                        </div>
                    </div>
                    <div className="partners-right">
                        <img src={Partners} alt="" />
                    </div>
                </div>
            </section>
            <section className="past-events">
                <div className="past-write-up">
                    <h2>Catch Our Past Events</h2>
                    <p>Re-watch powerful moments from our workshops, webinars, and X Spaces — all built to help you grow smarter, faster.</p>
                </div>
                <div className="past-events-flex">
                    <div className="past-events-left">
                        <img src={PastLeft} alt="" />
                        <div className="past-events-left-write-up">
                            <h4>Watch Our Webinars</h4>
                            <p>Replays of expert-led sessions that unpack career growth, job readiness, and future-of-work trends.</p>
                            <a href="" className="watch"> Watch on YouTube</a>
                        </div>

                    </div>
                    <div className="past-events-right">
                        <img src={PastRight} alt="" />
                        <div className="past-events-right-write-up">
                            <h4>Tune Into Our X Spaces</h4>
                            <p>Real conversations with real people — tackling growth, work, and opportunities in tech and beyond.</p>
                            <a href="" className="listen"> Listen on X</a>
                        </div>

                    </div>
                </div>
            </section>
            <section className="beyond">
                <div className="beyond-content">
                    <h2>Let the Growth Go Beyond Events</h2>
                    <p>Our events are the spark but don’t stop there. <br /> <span className="half">Come level up. Polish your CV, prep for interviews, and get <br /> career-ready with tools that actually work.</span></p>
                    <div className="beyond-links">
                        <a href="" className="beyond-tools">Explore Career Tools</a>
                        <a href="" className="beyond-hub">Join the Hub</a>
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
    );
}

export default Events;
