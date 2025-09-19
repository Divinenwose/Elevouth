import React, { useState, useEffect, useRef } from "react";
import './Navbar.css';
import { Link, useLocation} from "react-router-dom";
import Logo from "../../assets/elevouthlogo.png";
import Arrowdown from "../../assets/arrow-down.png";
import MenuIcon from "../../assets/menu.png";
import CloseIcon from "../../assets/close-circle.png"; 

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef();
    const location = useLocation();
    const isOnJoinHubPage = location.pathname === "/join-the-hub";



    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="nav-logo-container">
                <img src={Logo} alt="Elevouth Logo" className="logo" />
                <h1>ELEVOUTH</h1>
            </div>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menuOpen ? CloseIcon : MenuIcon} alt="Menu Toggle Icon" />
            </div>
            
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li className="nav-item">
                    <Link
                        to="/home"
                        className={activeLink === "home" ? "active" : ""}
                        onClick={() => handleLinkClick("home")}
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/aboutUs"
                        className={activeLink === "aboutUs" ? "active" : ""}
                        onClick={() => handleLinkClick("aboutUs")}
                    >
                        About Us
                    </Link>
                </li>
                
                <li className="nav-item dropdown">
                    <a href="#">Programs <img src={Arrowdown} alt="" /></a>
                    <ul className="dropdown-menu">
                        <li><a href="https://selar.com/m/elevouth" target="blank" rel="noopener" onClick={() => setMenuOpen(false)}>The Academy</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>Career Compass</a></li>
                        <li><a href="https://selar.com/m/elevouth" target="blank" rel="noopener" onClick={() => setMenuOpen(false)}>Career Services</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>Talent Placement</a></li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link
                        to="/events"
                        className={activeLink === "events" ? "active" : ""}
                        onClick={() => handleLinkClick("events")}
                    >
                        Events
                    </Link>
                </li>

                <li className="nav-item dropdown">
                    <a href="#">For Individuals <img src={Arrowdown} alt="" /></a>
                    <ul className="dropdown-menu">
                        <li><a href="https://selar.com/m/elevouth" target="blank" rel="noopener"onClick={() => setMenuOpen(false)}>The Academy</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>Career Compass</a></li>
                        <li><a href="https://selar.com/m/elevouth" target="blank" rel="noopener" onClick={() => setMenuOpen(false)}>Career Services</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>Talent Placement</a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a href="#">For Companies <img src={Arrowdown} alt="" /></a>
                    <ul className="dropdown-menu">
                        <li><a href="https://selar.com/m/elevouth" target="blank" rel="noopener" onClick={() => setMenuOpen(false)}>The Academy</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>Career Compass</a></li>
                        <li><a href="https://selar.com/m/elevouth" target="blank" rel="noopener" onClick={() => setMenuOpen(false)}>Career Services</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>Talent Placement</a></li>
                    </ul>
                </li>
                <li className="mobile-btn">
                    <Link
                        to={isOnJoinHubPage ? "#" : "/join-the-hub"}
                        className={`nav-btn ${isOnJoinHubPage ? "disabled" : ""}`}
                        onClick={(e) => {
                            if (isOnJoinHubPage) e.preventDefault();
                            else setMenuOpen(false);
                        }}
                    >
                        Join The Hub
                    </Link>
                </li>
            </ul>
            <div className="nav-btn-container">
                <Link
                    to={isOnJoinHubPage ? "#" : "/join-the-hub"}
                    className={`nav-btn ${isOnJoinHubPage ? "disabled" : ""}`}
                    onClick={(e) => isOnJoinHubPage && e.preventDefault()}
                >
                    Join The Hub
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;
