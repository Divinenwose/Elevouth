import React, { useState, useEffect } from "react";
import "./Hero.css";
import Heroimage1 from '../../assets/hero-image1.png';
import Heroimage2 from '../../assets/hero-image2.png';

const slides = [
  {
    title: "Built to Take You from",
    description: (
      <>
        Learning to Landing Roles.
      </>
    ),
    imgSrc: Heroimage1,
    imageText:
      "Elevouth guides you from uncertainty to career clarity, real-world skills, and meaningful work—GLOBALLY.",
    buttons: [
      {
        text: "Explore Skill Tracks",
        link: "https://elevouthacademyc2.lovable.app"
      },
      { text: "Hire Talent", link: "#learn-more" },
    ],
  },
  {
    description: (
      <>
        Find Talents That are Trained, Vetted, and Ready to Deliver.
      </>
    ),
    imgSrc: Heroimage2,
    imageText:
      "We prepare talents with more than just training—they gain real-world skills, project experience, and career coaching.",
    buttons: [
      { text: "Hire Talent", link: "#join" },
      {
        text: "Explore Skill Tracks",
        link: "https://elevouthacademyc2.lovable.app"
      },
    ],
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const currentSlide = slides[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="hero-section">
      <div className={`slide slide-${current}`}>
        <div className="hero-content">
          <div className="hero-text">
            {currentSlide.title && <p className="hero-title">{currentSlide.title}</p>}
            <h1 className="hero-description">
              {currentSlide.description}
            </h1>
            <div className="hero-buttons">
              {currentSlide.buttons.map((btn, index) => (
                <a key={index} href={btn.link} target="blank" rel="noopener noreferrer" className={`hero-btn ${index === 1 ? "hero-btn-alt" : ""}`}>
                  {btn.text}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-image">
            <p className="image-text">{currentSlide.imageText}</p>
            <img src={currentSlide.imgSrc} alt="Hero" />
          </div>
        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
