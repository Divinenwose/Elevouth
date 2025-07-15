import React, { useState, useEffect } from "react";
import "./FAQsection.css";

const faqs = [
  {
    question: "What makes Elevouth different from other platforms?",
    answer: "Elevouth blends mentorship, skill-building, and career mapping in a way that feels personal and purposeful.",
  },
  {
    question: "Is the Career Compass really personalized?",
    answer: "Yes! The Compass is designed to help you discover career paths that align with your strengths, interests, and goals then recommend skills and tracks that fit.",
  },
  {
    question: "How do you ensure your talents are job-ready?",
    answer: "Through practical projects, career coaching, and mock interviews that prepare them for real-world expectations.",
  },
  {
    question: "Do I need a tech background to join?",
    answer: "Yes. Elevouth is open to all paths — from design to business and more.",
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

const FAQSection = () => {
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
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>

      {/* Desktop carousel */}
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

      {/* Dots (always visible on desktop) */}
      <div className="faq-dots desktop-only">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === pageIndex ? "active" : ""}`}
            onClick={() => setPageIndex(i)}
          ></span>
        ))}
      </div>

      {/* Mobile arrows + dots only */}
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
  );
};

export default FAQSection;
