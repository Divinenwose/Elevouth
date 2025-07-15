import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import Comma from "../../assets/comma.png";

const testimonials = [
  {
    text: "Before Elevouth, I had no direction. The Career Compass showed me a clear path and gave me the confidence to chase real opportunities.",
    name: "Anita O.",
    role: "Product Designer",
    handle: "@Anita_Designer",
  },
  {
    text: "Elevouth made it easier to build clarity and map my progress without second guessing every move I make.",
    name: "Chuka N.",
    role: "Frontend Engineer",
    handle: "@Chuka_Dev",
  },
  {
    text: "What I learned in weeks with Elevouth, I couldn't figure out in months. Totally game-changing!",
    name: "Tomi T.",
    role: "UI/UX Designer",
    handle: "@Tomi_UI",
  },
  {
    text: "Thanks to Elevouth, I stopped doubting myself and started building real-world projects with a plan.",
    name: "Sarah K.",
    role: "Backend Developer",
    handle: "@SarahCodes",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <div className="sliding-handle" key={index}>
        <div className="scroll-content">
          <span>{testimonials[index].handle} &nbsp;  &nbsp;</span>
          <span>{testimonials[index].handle} &nbsp;  &nbsp;</span>
          <span>{testimonials[index].handle} &nbsp;  &nbsp;</span>
          <span>{testimonials[index].handle} &nbsp;  &nbsp;</span>
          <span>{testimonials[index].handle} &nbsp;  &nbsp;</span>
          <span>{testimonials[index].handle} &nbsp;  &nbsp;</span>
        </div>
      </div>

      <h2>They Did It. So Can You.</h2>
      <p>Proof that clarity, skill, and support change everything.</p>

      <div className="testimonial-cards">
        {testimonials.map((item, i) => {
          let className = "testimonial-card";
          if (i === index) {
            className += " active";
          } else if (i === (index + 1) % testimonials.length) {
            className += " next";
          } else if (i === (index - 1 + testimonials.length) % testimonials.length) {
            className += " prev";
          } else {
            className += " fourth";
          }

          return (
            <div key={i} className={className}>
              <div className="comma"><img src={Comma} alt="" className="Comma" /></div>
              <p className="testimonial-text">{item.text}</p>
              <div className="card-footer">
                <div className="bottom-left">
                    <span className="testimonial-name">-{item.name}</span>
                    <span className="testimonial-role">{item.role}</span>
                </div>
                <span className="testimonial-handle">{item.handle}</span>
              </div>

              {i === index && <div className="progress-bar"></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
