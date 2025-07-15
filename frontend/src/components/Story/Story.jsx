import React from "react";
import "./Story.css";
import storypic from "../../assets/stor-image2.png";

const Story = () => {
    return (
        <div className="story-container">
            <div className="story-container-content">
                <div className="story-content">
                    <h2>The Story Behind Elevouth</h2>
                    <p>
                        We have been the confused beginner. The overlooked  candidate. The underestimated doer.
                    </p>
                    <div className="story-btn-container">
                        <a className="story-btn" href="#">Read Our Full Story</a>
                    </div>
                </div>
                <div className="story-flex">
                    <div className="image-wrapper">
                     <img src={storypic} alt="Story" className="storypic" />
                    </div>
                    <p>
                        We have felt what it is like to be stuck—chasing clarity, better skills, and real opportunities—only to hit noise and closed doors. <br /> <br />
                        We have also been on the hiring side, sifting through  resumes that look great but do not deliver when it  counts. <br /> <br />
                        Elevouth was born out of those frustrations and built  to solve them. <br /> <br />
                        We help individuals grow with purpose and connect  companies to talents who are trained, vetted, and built for impact. 
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Story;
