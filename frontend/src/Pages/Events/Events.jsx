import React, { useRef, useState, useEffect } from "react";
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
import joeImg from "../../assets/joe.png";
import willyImg from "../../assets/willy.png";
import alex from "../../assets/alex.png";
import daniel from "../../assets/daniel.png";
import placeholder from "../../assets/placeholder.png";
import wiflow from "../../assets/wiflow.png";
import asodesign from "../../assets/asodesign.png";
import meei from "../../assets/meei.png";
import tribe from "../../assets/tribe.png";
import aen from "../../assets/aen.png";
import ignite from "../../assets/ignite.png";
import awie from "../../assets/awie.png";
import payverde from "../../assets/payverde.png";

const getSpeakersPerPage = () => (window.innerWidth <= 768 ? 1 : 3);

const Events = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const speakers = [
        {
            role: "Keynote Speaker",
            name: " Joe Houghton",
            title: "Assistant Professor & Academic Director, UCD Smurfit Graduate School of Business, Dublin",
            session: "The Future of Talent in a Changing World: Skills, Opportunities and Technologies",
            image: joeImg,
        },
        {
            role: "Keynote Speaker",
            name: "Willy Nsabiyumva",
            title: "Business Consultant & Entrepreneurship Development Expert",
            session: "Talent, Innovation & Africa’s Role in the Global Workforce",
            image: willyImg,
        },
        {
            role: "Featured Talk",
            name: "Toluwani Ogundele",
            title: "Founder, Elevouth",
            session: "Clarity First: Building a Career Roadmap that Works",
            image: placeholder,
        },
        {
            role: "Featured Talk",
            name: "Barinaada Alex-Iheanacho",
            title: "Founder, Barinaada Legal",
            session: "Workplace Law and You: Contracts, Rights & Compliance",
            image: alex,
        },
        {
            role: "Featured Talk",
            name: "Chika Ike-Ojukwu ",
            title: "Global LinkedIn Coach, Content Creator & Influencer",
            session: "Soft Skills Are the New Hard Skills: Thriving in the Global Talent Economy",
            image: placeholder,
        },
        {
            role: "Featured Talk",
            name: "Dr. Daniel Deji Ayodele",
            title: "Social Entrepreneur & Pan-African Leader",
            session: "Breaking Borders: Succeeding in Global Job Markets",
            image: daniel,
        },
    ];

    const [speakersPerPage, setSpeakersPerPage] = useState(getSpeakersPerPage());
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newSpeakersPerPage = getSpeakersPerPage();
            setSpeakersPerPage(newSpeakersPerPage);
            setPageIndex(0); 
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(speakers.length / speakersPerPage);

    const handlePrev = () => {
        if (pageIndex > 0) setPageIndex(pageIndex - 1);
    };

    const handleNext = () => {
        if (pageIndex < totalPages - 1) setPageIndex(pageIndex + 1);
    };

    const currentSpeakers = speakers.slice(
        pageIndex * speakersPerPage,
        (pageIndex + 1) * speakersPerPage
    );

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
                        <a href="https://forms.gle/rJJZ9qFbgdLdL44G6" target="blank" className="sponsor">Become a Sponsor</a>
                    </div>
                </div>

                <div className="event-hero-container">
                    <div className="event-hero-content">
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
                                    <p> 10+ Global Speakers</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Breakout Sessions</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Talent Market Insights</p>
                                </div>
                            </div>
                            <div className="event-flex-two">
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>1000+ Attendees</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>5+ Countries</p>
                                </div>
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Recruiter Networking</p>
                                </div>
                            </div>
                            <div className="event-flex-three">
                                <div className="event-flex-content">
                                    <img src={Tick} alt="" />
                                    <p>Global opportunities</p>
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
                    <div className="sponsors-slider">
                        <div className="sponsors-links"><img src={Sponsors} alt="" /></div>
                        <div className="sponsors-links meei"><img src={meei} alt="" /></div>
                        <div className="sponsors-links"><img src={wiflow} alt="" /></div>
                        <div className="sponsors-links aso"><img src={asodesign} alt="" /></div>
                        <div className="sponsors-links tribe"><img src={tribe} alt="" /></div>
                        <div className="sponsors-links aen"><img src={aen} alt="" /></div>
                        <div className="sponsors-links awie"><img src={awie} alt="" /></div>
                        <div className="sponsors-links payverde"><img src={payverde} alt="" /></div>
                        <div className="sponsors-links ignite"><img src={ignite} alt="" /></div>
                        <div className="sponsors-links meei"><img src={meei} alt="" /></div>
                        <div className="sponsors-links"><img src={wiflow} alt="" /></div>
                        <div className="sponsors-links aso"><img  src={asodesign} alt="" /></div>
                        <div className="sponsors-links tribe"><img src={tribe} alt="" /></div>
                        <div className="sponsors-links aen"><img src={aen} alt="" /></div>
                        <div className="sponsors-links awie"><img src={awie} alt="" /></div>
                        <div className="sponsors-links payverde"><img src={payverde} alt="" /></div>
                        <div className="sponsors-links ignite"><img src={ignite} alt="" /></div>
                    </div>
                </div>
            </section>
            <section className="voices">
                <div className="voices-writeup">
                    <h4>Meet the Voices Shaping the Future</h4>
                    <p>
                        Get ready to hear from bold voices, brilliant thinkers, and game-changers redefining the future of work.
                    </p>
                </div>
                <div className="events-carousel">
                    <div className="arrow-btn-wrapper">
                        <button
                            onClick={handlePrev}
                            disabled={pageIndex === 0}
                            className="arrow-btn">
                            ←
                        </button>
                    </div>
                    <div className="speaker-cards">
                        {currentSpeakers.map((speaker, index) => (
                            <div className="speaker-card" key={index}>
                            <div className={`speaker-role ${speaker.role === "Featured Talk" ? "featured-talk" : ""}`}>
                                <p>{speaker.role}</p>
                            </div>
                            <div className="speaker-image">
                                <img src={speaker.image} alt={speaker.name} /> 
                            </div>
                            <h4 className="speaker-name">{speaker.name}</h4>
                            {speaker.title && <p className="speaker-title">{speaker.title}</p>}
                            <div className="speaker-session">
                                <strong className="sess">Session:</strong> <p>{speaker.session}</p>
                            </div>
                            </div>
                        ))}
                    </div>

                    <div className="arrow-btn-wrapper">
                        <button
                            onClick={handleNext}
                            disabled={pageIndex === totalPages - 1}
                            className="arrow-btn">
                            →
                        </button>
                    </div>
                </div>
                <div className="carousel-dots-desktop-only">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === pageIndex ? "active" : ""}`}
                            onClick={() => setPageIndex(i)}>

                        </span>
                    ))}
                </div>
                <div className="carousel-dots-wrapper-mobile">
                    <button
                        onClick={handlePrev}
                        disabled={pageIndex === 0}
                        className="arrow-btn">
                        ←
                    </button>
                    <div className="carousel-dots">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <span
                            key={i}
                            className={`dot ${i === pageIndex ? "active" : ""}`}
                            onClick={() => setPageIndex(i)}
                            ></span>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={pageIndex === totalPages - 1}
                        className="arrow-btn">
                        →
                    </button>
                </div>
            </section>
            <section className="partners">
                <div className="partners-content">
                    <div className="partners-left">
                        <h2>Want to Sponsor or Partner with us?</h2>
                        <p>Be part of the movement shaping tomorrow’s talent. Elevouth invites organizations, brands, and communities to support and gain visibility at Africa’s most impactful career summit.</p>
                        <div className="partner-links">
                            <a href="https://forms.gle/rJJZ9qFbgdLdL44G6" target="blank" className="become-cta">Become a Sponsor</a>
                            <a href="https://forms.gle/1QJ8JMH6RPSXBkth7" target="blank" className="partner-cta">Partner with Us</a>
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
                            <a href="https://x.com/elevouth_hub?t=CJQIQJG3Vxm_dQbDrjuZeA&s=08" target="blank" className="listen"> Listen on X</a>
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
