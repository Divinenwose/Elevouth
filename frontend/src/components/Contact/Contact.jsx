import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <div className="contact-writeup">
          <h2>Have a question, concern, or <br /> just need a little guidance?</h2>
          <p>
            Whether you are exploring your next career move or looking to <br />
            collaborate and hire talents, we are just a message away — and <br />
            happy to help.
          </p>
          <div className="contact-flex">
            <div className="contact-info">
              <p className="title">Email</p>
              <p className="title-paragraph">info@elevouth.com</p>
            </div>
            <div className="contact-info">
              <p className="title">Phone</p>
              <p className="title-paragraph">+234 9021 2724 89</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="contact-form-content">
            <div className="contact-names">
              <div className="firstname">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" placeholder="Enter first name" />
              </div>
              <div className="last-name">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" placeholder="Enter last name" />
              </div>
            </div>

            <div className="contact-names">
              <div className="firstname">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className="contact-names">
              <div className="firstname">
                <label htmlFor="message">How can we help you?</label>
                <textarea id="message" placeholder="Enter your message"></textarea>
              </div>
            </div>
            <div className="contact-btn-wrapper">
                <a href="#">Send Message</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
