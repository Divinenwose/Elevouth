import "./Readmore.css";
import exit from "../../assets/exit.png";
import wireframe from "../../assets/wireframe.png";
import dots from "../../assets/dots.png";
import arrow from "../../assets/ar.png";

const Readmore = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <div className="top-container">
                    <h2>About This Course</h2>
                    <span className="close-modal" onClick={onClose}>
                        <img src={exit} alt="" />
                    </span>
                </div>
                <div className="modal-content">
                    <img src={wireframe} className="wire" alt="" />
                    <p>Our 8-week program gives you a clear UI/UX roadmap and practical skills to start designing with confidence.</p>
                    <ul>
                        <li><img className="modal-dots" src={dots} alt="" />  Learn how top product designers identify user needs and align design decisions with business goals.</li>
                        <li><img className="modal-dots" src={dots} alt="" />Gain hands-on experience with essential UI/UX design tools.</li>
                        <li> <img className="modal-dots" src={dots} alt="" />Build a portfolio with real-world projects that showcase your skills.</li>
                        <li><img className="modal-dots" src={dots} alt="" />Use AI to research, ideate, design, prototype, and speed up your workflow.</li>
                        <li><img className="modal-dots" src={dots} alt="" />Position yourself for a promotion or a new career in a fast-growing industry.</li>
                    </ul>
                    <div className="modal-btn">
                        <a href="https://elevouthacademyc2.lovable.app" target="_blank" rel="noopener noreferrer" className="modal-join">Join Next Cohort</a>
                        <a className="modal-enroll" href="">Enroll Now <img src={arrow} alt="" /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Readmore;
