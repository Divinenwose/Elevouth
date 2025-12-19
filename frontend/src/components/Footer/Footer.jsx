import React from "react";
import "./Footer.css";
import Footerlogo from "../../assets/footer-logo.png";
import arrowup from "../../assets/arrow-up.png";
import whatsapp from "../../assets/whatsapp.png";
import tiktok from "../../assets/tiktok.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo3.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";

const Footer = () => {
    return(
        <div className="footer-section">
            <div className="footer-container">
                <div className="footer-logo-container">
                    <div className="footer-logo-content">
                        <div className="footer-logo">
                            <img src={Footerlogo} alt="Elevouth-logo" />
                            <p>From Who You Are to <br /> Where You Belong.</p>
                        </div>
                        <div className="chat">
                            <p>Let’s chat</p>
                            <div className="whatsapp">
                                <img src={whatsapp} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-nav">
                    <div className="thehub">
                        <h4>The Hub</h4>
                        <div className="thehub-links">
                            <p>Join the Hub</p>
                            <p>Events & Meetups</p>
                            <p>Discussions</p>
                        </div>
                    </div>
                    <div className="about-footer">
                        <h4>About Us</h4>
                        <div className="about-footer-links">
                            <p>Vision</p>
                            <p>Mission</p>
                            <p>Our Story</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div className="academy">
                        <h4>The Academy</h4>
                    </div>
                    <div className="resources">
                        <h4>Resources</h4>
                        <div className="resources-links">
                            <p>Blog</p>
                            <p>FAQs</p>
                            <p>Events</p>
                            <p>Webinars</p>
                            <p>Success Stories</p>
                            <p>Help Center</p>
                        </div>
                    </div>
                    <div className="programs">
                        <h4>Programs</h4>
                        <div className="programs-links">
                            <p>Career Services</p>
                            <p>Career Compass</p>
                            <p>Talent Network</p>
                            <p>Elevouth Labs</p>
                        </div>
                    </div>
                    <div className="legal">
                        <h4>Legal</h4>
                        <div className="resources-links">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Disclaimer</p>
                        </div>
                    </div>
                </div>
                <div className="go-up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
                    <div className="go-up-image">
                        <img src={arrowup} alt="Go to top" />
                    </div>
                    <p>Back to Top</p>
                </div>
            </div>
            <div className="socials">
                <div className="follow">
                    <p>Follow us</p>
                </div>
                <div className="social-icons">
                    <div className="rings">
                        <a href=""><img src={facebook} alt="" /></a>
                    </div>
                    <div className="rings">
                        <a href="https://www.linkedin.com/company/elevouth-hub/"><img src={linkedin} alt="" /></a>
                    </div>
                    <div className="rings">
                        <a href="https://www.instagram.com/elevouth_hq?igsh=MW5xNmduemg1ZHU2Ng==" target="blank"><img src={logo} alt="" /></a>
                    </div>
                    <div className="rings">
                        <a href=""><img src={tiktok} alt="" /></a>
                    </div>
                    <div className="rings">
                        <a href=""><img src={youtube} alt="" /></a>
                    </div>
                    <div className="rings">
                        <a href="https://x.com/elevouth_hub?t=CJQIQJG3Vxm_dQbDrjuZeA&s=08" target="blank"><img src={twitter} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="horizontal-rule"></div>
            <div className="copyright">
                <p>© 2025 — Elevouth. All rights reserved.</p>
                <div className="languages">
                    <p>En</p>
                    <p>Es</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;