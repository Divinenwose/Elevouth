import React, { useState, useEffect } from "react";
import "./Academy.css";
import { Link } from "react-router-dom";
import academy1 from "../../assets/academy1.png"
import academy2 from "../../assets/academy2.png"
import academy3 from "../../assets/academy3.png"
import academy4 from "../../assets/academy4.png"
import academy5 from "../../assets/academy5.png"
import academy6 from "../../assets/academy6.png"
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const faqs = [
    {
        question: "What exactly is Elevouth Academy and who is it for?",
        answer: "Elevouth Academy is a practical learning space for people who want real skills they can use to build a career, and grow professionally. If you are trying to get clarity on your path, switch careers, or level up with skills that employers and clients care about, the Academy is built for you.",
    },
    {
        question: "Are the courses beginner friendly?",
        answer: "Yes. You won’t be thrown into the deep end. Every course starts from the basics and moves upward at a pace that makes sense. You don’t need any previous experience, just commitment and willingness to learn.",
    },
    {
        question: "What makes Elevouth’s programs different from random online courses?",
        answer: "Two things: structure and support. You are guided by experienced tutors, supported by the admin team, and you will complete real tasks that build confidence. The goal is for you to actually use what you learn, not just collect certificates.",
    },
    {
        question: "Do I need a tech background to join?",
        answer: "No. Elevouth is open to all paths — from design to business and more.",
    },
    {
        question: "Can we hire talents directly from Elevouth?",
        answer: "Many users see clarity in just a few weeks of focused mentorship and tasks.",
    },
    {
        question: "Do you offer training for existing teams?",
        answer: "We offer both free and premium options based on your learning needs.",
    },
];

const getItemsPerPage = () => (window.innerWidth <= 768 ? 1 : 3);

const Academy = () => {
    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newItemsPerPage = getItemsPerPage();
            setItemsPerPage(newItemsPerPage);
            setPageIndex(0);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(faqs.length / itemsPerPage);

    const handlePrev = () => {
        if (pageIndex > 0) setPageIndex(pageIndex - 1);
    };

    const handleNext = () => {
        if (pageIndex < totalPages - 1) setPageIndex(pageIndex + 1);
    };

    const currentFaqs = faqs.slice(
        pageIndex * itemsPerPage,
        (pageIndex + 1) * itemsPerPage
    );
    return (
        <div className="academy-section">
            <div className="academy-hero">
                <h2>A global academy for <span className="tech">tech</span>, <span className="creative">creative</span>, <br /> and <span className="leadership">leadership</span> skills.</h2>
                <p>Elevouth Academy is a multi-disciplinary learning institution offering <br /> industry-proven programs across tech, business, design, and creative crafts</p>
                <a href="" className="course">Check Out Courses</a>
            </div>
            <div className="pictures">
                <div className="picture-flex">
                    <img src={academy1} alt="" />
                </div>
                <div className="picture-flex">
                    <img src={academy2} alt="" />
                </div>
                <div className="picture-flex">
                    <img src={academy3} alt="" />
                </div>
            </div>
            <div className="academy-content">
                <div className="academy-text">
                    <h2>Our Transformative Learning Experience.</h2>
                    <p>Choose from industry-ready Tech, Creative, and Leadership programs designed to equip <br /> you with practical skills, hands-on experience, and a clear career direction.</p>
                </div>
                <div className="academy-images">
                    <div className="academy-image">
                        <img className="academy4" src={academy4} alt="" />
                        <div className="academy-image-text">
                            <h2>Tech Programs</h2>
                            <p>Learn in-demand tech skills like UI/UX, Product, Marketing, Project Management, and more—through hands-on projects and real-world execution.</p>
                            <Link
                                className="extech"
                                to="/academy/tech-programs"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                Explore Tech Tracks
                            </Link>
                        </div>
                    </div>
                    <div className="academy-image-two">
                        <div className="academy-box">
                            <div className="academy-img">
                                <img src={academy5} alt="" />
                            </div>
                            <div className="academy-info">
                                <h2>Creative & Craft Programs</h2>
                                <p>Develop practical creative abilities in fashion, beading, and more. Learn by crafting, and showcasing real projects.</p>
                                <a className="extech1" href="">Explore Creative Tracks</a>
                            </div>
                        </div>
                        <div className="academy-box">
                            <div className="academy-box-info">
                                <h2>Leadership Programs</h2>
                                <p>Develop essential leadership, career acceleration and communication, skills from personal branding to professional positioning—to thrive in the global workplace.</p>
                                <a className="extech1" href="">Explore Leadership Tracks</a>
                            </div>
                            <div className="academy-boximg">
                                <img src={academy6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="path-container">
                <div className="path-content-container">
                    <div className="path-content">
                        <h2>Find Your Path, Without the Guesswork</h2>
                        <p>Book a one-on-one session with our career consultant today, and enjoy a bonus follow-up <br /> session on us. Think of it as us investing in your future.</p>
                    </div>
                    <div className="path-btn-container">
                        <div className="path-btn-wrapper">
                            <a href="#" className="path-btn">Book a call</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Testimonials />
            </div>
            <div className="faq-section">
                <div className="faq-section-content">
                    <div className="faq-section-left">
                        <h3>FAQs</h3>
                        <h2>
                            Let’s Clear Things Up <br /> Before You Dive In.
                        </h2>
                    </div>
                    <div className="faq-section-right">
                        <p>
                            Whether you are just discovering Elevouth or already thinking about
                            your next move, these answers will help you take the first step with
                            confidence.
                        </p>
                    </div>
                </div>
                <div className="faq-carousel">
                    <div className="arrow-btn-wrapper">
                        <button
                            onClick={handlePrev}
                            disabled={pageIndex === 0}
                            className="arrow-btn"
                        >
                            ←
                        </button>
                    </div>

                    <div className="faq-cards">
                        {currentFaqs.map((faq, idx) => (
                            <div key={idx} className="faq-card">
                                <div className="faq-number">
                                    {pageIndex * itemsPerPage + idx + 1}
                                </div>
                                <div className="faq-question">{faq.question}</div>
                                <div className="faq-answer">{faq.answer}</div>
                            </div>
                        ))}
                    </div>

                    <div className="arrow-btn-wrapper">
                        <button
                            onClick={handleNext}
                            disabled={pageIndex === totalPages - 1}
                            className="arrow-btn"
                        >
                            →
                        </button>
                    </div>
                </div>
                <div className="faq-dots desktop-only">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === pageIndex ? "active" : ""}`}
                            onClick={() => setPageIndex(i)}
                        ></span>
                    ))}
                </div>
                <div className="faq-dots-wrapper-mobile">
                    <button
                        onClick={handlePrev}
                        disabled={pageIndex === 0}
                        className="arrow-btn"
                    >
                        ←
                    </button>

                    <div className="faq-dots">
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
                        className="arrow-btn"
                    >
                        →
                    </button>
                </div>
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Academy;