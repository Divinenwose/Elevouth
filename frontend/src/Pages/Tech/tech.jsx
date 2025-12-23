import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tech.css";
import { Link } from "react-router-dom";
import Techimg from "../../assets/tech-hero-img.png";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import star from "../../assets/Star 1.png";
import arrow from "../../assets/ar.png";
import webinar from "../../assets/webinar.png";
import Readmore from "../../components/ReadMore/Readmore.jsx";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";

const courses = [
  {
    title: "UX Design",
    title1: "Advanced Prototyping: From early ideas to rich interactions",
    title2: "Portfolio Sprint",
    price: 70000,
    level: "Beginner – Intermediate",
    level1: "Online – Global Access",
    level2: "Online - YouTube Live",
    duration: "8 Weeks",
    duration1: "Dec. 8 - Dec. 10",
    description:
      "Learn the core principles of UX, UI, user research, wireframes, design tools, and beginner workflows. Build your first real portfolio projects.",
    decription2: "Create a standout portfolio in record time with practical exercises.",
    dlineClass: "dline2",
    dlineTop: "dline11",
    dlineBottom: "line",
    rating: "4.5"
  },
  {
    title: "Project Management",
    title1: "Advanced Prototyping: From early ideas to rich interactions",
    title2: "Portfolio Sprint",
    price: 120000,
    level: "Beginner – Intermediate",
    level1: "Online – Global Access",
    level2: "Online - YouTube Live",
    duration: "8 Weeks",
    duration1: "Dec. 8 - Dec. 10",
    description:
      "Master the art of turning ideas into products people actually want by enrolling into one of tech’s most strategic roles.",
    decription2: "Create a standout portfolio in record time with practical exercises.",
    dlineClass: "dline3",
    dlineTop: "dline12",
    dlineBottom: "line",
  },
  {
    title: "Digital Marketing",
    title1: "Advanced Prototyping: From early ideas to rich interactions",
    title2: "Portfolio Sprint",
    price: 70000,
    level: "Beginner – Intermediate",
    level1: "Online – Global Access",
    level2: "Online - YouTube Live",
    duration: "8 Weeks",
    duration1: "Dec. 8 - Dec. 10",
    description:
      "Learn how to grow brands, run ads, create content that converts, and become the marketer businesses rely on to drive results.",
    decription2: "Create a standout portfolio in record time with practical exercises.",
    dlineClass: "dline4",
    dlineTop: "dline13",
    dlineBottom: "line",
    rating: "4.5"
  },
  {
    title: "Virtual Assistant (VA)",
    title1: "Advanced Prototyping: From early ideas to rich interactions",
    title2: "Portfolio Sprint",
    price: 70000,
    level: "Beginner – Intermediate",
    level1: "Online – Global Access",
    level2: "Online - YouTube Live",
    duration: "8 Weeks",
    duration1: "Dec. 8 - Dec. 10",
    description:
      "If you love structure, planning, or helping things run smoothly, Learn the skills that make you indispensable and the confidence to work with global clients.",
    decription2: "Create a standout portfolio in record time with practical exercises.",
    dlineClass: "dline2",
    dlineTop: "dline11",
    dlineBottom: "line",
    rating: "4.5"
  },
  {
    title: "Graphics Design",
    title1: "Advanced Prototyping: From early ideas to rich interactions",
    title2: "Portfolio Sprint",
    price: 70000,
    level: "Beginner – Intermediate",
    level1: "Online – Global Access",
    level2: "Online - YouTube Live",
    duration: "8 Weeks",
    duration1: "Dec. 8 - Dec. 10",
    description:
      "Become a graphics designer — learn visual communication, branding, and real-world design skills.",
    decription2: "Create a standout portfolio in record time with practical exercises.",
    dlineClass: "dline3",
    dlineTop: "dline12",
    dlineBottom: "line",
    rating: "4.5"
  },
  {
    title: "Advanced IT Project Management",
    title1: "Advanced Prototyping: From early ideas to rich interactions",
    title2: "Portfolio Sprint",
    price: 100000,
    level: "Beginner – Intermediate",
    level1: "Online – Global Access",
    level2: "Online - YouTube Live",
    duration: "8 Weeks",
    duration1: "Dec. 8 - Dec. 10",
    description:
      "Master how to lead technology teams and deliver complex digital products. This track focuses on AI, Web3, cloud systems, and modern software development processes.",
    decription2: "Create a standout portfolio in record time with practical exercises.",
    dlineClass: "dline4",
    dlineTop: "dline13",
    dlineBottom: "line",
    rating: "4.5"
  },
];


const slides = [
  {
    id: 1,
    title: "Start your career with <br /> skills employers want.",
    text: "Gain practical, job-ready experience through expert-led <br /> lessons, real projects, and guided learning paths.",
    btn: "Check Out Courses",
    img: Techimg,
  },
  {
    id: 2,
    title: "Enrollment for the Next <br /> Cohort is Now Open",
    text: "Hundreds are already securing their spots to learn, grow, and land real <br /> opportunities. Don’t watch from the sidelines",
    btn: "Check Out Courses",
    features: [
      "Limited Slot",
      "Access to Mentors",
      "100% Virtual Learning",
      "Certificate of Completion",
    ],
  },
];

const Tech = () => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState("ongoing");
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [index]);

  const current = slides[index];

  const navigate = useNavigate();

  const handleCheckout = (selectedCourse) => {
    navigate("/academy/tech-programs/checkout", { state: { course: selectedCourse } });
  };

  const advancedCourses = courses;

  return (
    <section className="tech-section">
      <div className="tech-section-container">
        {current.id === 2 ? (
          <div className="tech-hero  fade-slide">
            <div className="tech-hero-right">
              <ul className="feature-list">
                {current.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="tech-hero-left">
              <h1
                className="hero-title"
                dangerouslySetInnerHTML={{ __html: current.title }}
              />
              <p dangerouslySetInnerHTML={{ __html: current.text }} />
              <a href="#" className="tech-hero-btn">{current.btn}</a>
            </div>
            <div className="tech-hero-testimonial">
              <div className="test-top">
                <div className="first-test">
                  <img className="avatar" src={avatar1} alt="" />
                  <div className="test-text">
                    <p>I strongly recommend Elevouth if you are still confused on what tech skill to learn.</p>
                  </div>
                </div>
                <div className="second-test">
                  <img className="avatar" src={avatar2} alt="" />
                  <div className="test-text">
                    <p>I strongly recommend Elevouth if you are still confused on what tech skill to learn.</p>
                  </div>
                </div>
              </div>
              <div className="test-bottom">
                <div className="third-test">
                  <img className="avatar" src={avatar3} alt="" />
                  <div className="test-text">
                    <p>I strongly recommend Elevouth if you are still confused on what tech skill to learn.</p>
                  </div>
                </div>
                <div className="first-test">
                  <img className="avatar" src={avatar4} alt="" />
                  <div className="test-text">
                    <p>I strongly recommend Elevouth if you are still confused on what tech skill to learn.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="tech-hero-left-one">
              <h1
                className="hero-title"
                dangerouslySetInnerHTML={{ __html: current.title }}
              />
              <p dangerouslySetInnerHTML={{ __html: current.text }} />
              <a href="#" className="tech-hero-btn">{current.btn}</a>
            </div>

            <div className="tech-hero-right fade-slide">
              <img src={current.img} alt="hero" />
            </div>
          </>
        )}
      </div>

      <div className="tech-programs">
        <div className="tech-programs-container">
          <div className="programs-text">
            <h1>Tech Programs</h1>
            <p>Build in-demand tech skills with structured <br /> programs, bootcamps, and advanced career <br /> pathways designed for industry readiness.</p>
          </div>
        </div>
        <div className="tech-program-details">
          <div className="tech-program-navbar">
            <ul className="tech-program-nav">
              <li
                className={active === "ongoing" ? "active" : ""}
                onClick={() => setActive("ongoing")}
              >
                Ongoing Cohort
              </li>
              <li
                className={active === "fundamental" ? "active" : ""}
                onClick={() => setActive("fundamental")}
              >
                Fundamental Tracks
              </li>
              <li
                className={active === "advanced" ? "active" : ""}
                onClick={() => setActive("advanced")}
              >
                Advanced Programs
              </li>

              <li
                className={active === "bootcamps" ? "active" : ""}
                onClick={() => setActive("bootcamps")}
              >
                Bootcamps
              </li>
              <li
                className={active === "webinars" ? "active" : ""}
                onClick={() => setActive("webinars")}
              >
                Webinars
              </li>
            </ul>
          </div>
          <div className="tech-tab-content">
            {active === "ongoing" && (
              <div className="content-box">
                <div className="cohort">
                  <div className="cohort-container">
                    <div className="cohort-text">
                      <p className="jan">
                        Next Cohort Starts: January 2026 •{" "}
                        <span className="reg">Registration is Now Open</span>
                      </p>
                      <p className="jany">
                        Join any of our major digital skills tracks and learn with live
                        classes, mentorship & real projects.
                      </p>
                    </div>
                    <div className="cohort-btn">
                      <a href="">Register for Next Cohort</a>
                    </div>
                  </div>
                </div>
                <div className="cohort-box">
                  <div className="box-scroll-area">
                    <div className="box-container">
                      {courses.map((course, index) => (
                        <div className="ux" key={index}>
                          <div className="ux-container">
                            <div className="week">
                              <p>Popular this week</p>
                            </div>
                            <div className="design">
                              <div className={course.dlineTop}></div>
                              <div className="design-text">
                                <h2>{course.title}</h2>
                                <div className="more">
                                  <p>
                                    {course.description}{" "}
                                    <a
                                      href="#"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setOpenModal(true);
                                      }}
                                    >
                                      Read More
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="level-container">
                              <div className="level-flex">
                                <div className="level">
                                  <p className="beginnr">{course.level}</p>
                                  <p className="eight-wks">
                                    {course.duration} <span className="duration">(Jan.- March)</span>
                                  </p>
                                </div>
                                <div className="amount">
                                  <p>₦ {course.price.toLocaleString()}</p>
                                  <div className="ratings">
                                    <img src={star} alt="" />
                                    <p>4.5</p>
                                  </div>
                                </div>
                              </div>
                              <div className="level-btn">
                                <a href="" className="nxt">
                                  Join Next Cohort
                                </a>
                                <div className="enroll">
                                  <Link
                                    to="/academy/tech-programs/checkout"
                                    state={{ course }}
                                  >
                                    Enroll Now <img src={arrow} alt="" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="cohort">
                  <div className="cohort-container">
                    <div className="cohort-text">
                      <p className="jan">
                        Next Cohort Starts: January 2026 •{" "}
                        <span className="reg">Registration is Now Open</span>
                      </p>
                      <p className="jany">
                        Join any of our major digital skills tracks and learn with live
                        classes, mentorship & real projects.
                      </p>
                    </div>
                    <div className="cohort-btn">
                      <a href="">Register for Next Cohort</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === "fundamental" && (
              <div className="content-box">
                <div className="cohort">
                  <div className="cohort-container">
                    <div className="cohort-text">
                      <p className="jan">
                        Next Cohort Starts: January 2026 • <span className="reg">Registration is Now Open</span>
                      </p>
                      <p className="jany">
                        Join any of our major digital skills tracks and learn with live classes, mentorship & real projects.
                      </p>
                    </div>
                    <div className="cohort-btn">
                      <a href="">Register for Next Cohort</a>
                    </div>
                  </div>
                </div>

                <div className="cohort-box">
                  <div className="box-scroll-area">
                    <div className="box-container">
                      {courses.map((course, index) => (
                        <div key={index} className={index === 0 ? "ux" : index === 1 ? "projma" : index === 2 ? "digital-mark" : index === 3 ? "virtual" : index === 4 ? "graphics" : "advanced"}>
                          <div className="ux-container">
                            <div className="week">
                              <p>Popular this week</p>
                            </div>
                            <div className={`design-fund`}>
                              <div className="design-text">
                                <h2>{course.title}</h2>
                                <div className="more">
                                  <p>
                                    {course.description}{" "}
                                    <a
                                      href="#"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setOpenModal(true);
                                      }}
                                    >
                                      Read More
                                    </a>
                                  </p>
                                </div>
                                <div className={course.dlineClass}></div>
                              </div>
                            </div>
                            <div className="level-container">
                              <div className="level-flex">
                                <div className="level">
                                  <p className="beginnr">{course.level}</p>
                                  <p className="eight-wks">
                                    {course.duration} <span className="duration">(Jan.- March)</span>
                                  </p>
                                </div>
                                <div className="amount">
                                  <p>₦ {course.price.toLocaleString()}</p>
                                  <div className="ratings">
                                    <img src={star} alt="" />
                                    <p>4.5</p>
                                  </div>
                                </div>
                              </div>
                              <div className="level-btn">
                                <a href="" className="nxt">Join Next Cohort</a>
                                <div className="enroll">
                                  <Link
                                    to="/academy/tech-programs/checkout"
                                    state={{ course }}
                                  >
                                    Enroll Now <img src={arrow} alt="" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cohort">
                  <div className="cohort-container">
                    <div className="cohort-text">
                      <p className="jan">
                        Next Cohort Starts: January 2026 • <span className="reg">Registration is Now Open</span>
                      </p>
                      <p className="jany">
                        Join any of our major digital skills tracks and learn with live classes, mentorship & real projects.
                      </p>
                    </div>
                    <div className="cohort-btn">
                      <a href="">Register for Next Cohort</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === "advanced" && (
              <div className="content-box">
                <div className="cohort">
                  <div className="cohort-container">
                    <div className="cohort-text">
                      <p className="jan">
                        Next Cohort Starts: January 2026 • <span className="reg">Registration is Now Open</span>
                      </p>
                      <p className="jany">
                        Join any of our major digital skills tracks and learn with live classes, mentorship & real projects.
                      </p>
                    </div>
                    <div className="cohort-btn">
                      <a href="">Register for Next Cohort</a>
                    </div>
                  </div>
                </div>
                <div className="cohort-box">
                  <div className="box-scroll-area">
                    <div className="box-container">
                      {courses.map((course, index) => (
                        <div
                          key={index}
                          className={
                            index === 0
                              ? "ux"
                              : index === 1
                                ? "projma"
                                : index === 2
                                  ? "digital-mark"
                                  : index === 3
                                    ? "virtual"
                                    : index === 4
                                      ? "graphics"
                                      : "advanced"
                          }
                        >
                          <div className="ux-container">
                            <div className="week1">
                              <p>Trending</p>
                            </div>
                            <div className="design-fund">
                              <div className="design-text-advp">
                                <h2>{course.title1}</h2>
                                <div className="more">
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setOpenModal(true);
                                    }}
                                  >
                                    View Details
                                  </a>
                                </div>
                                <div className={course.dlineBottom}></div>
                              </div>
                            </div>
                            <div className="level-container">
                              <div className="level-flex">
                                <div className="level">
                                  <p className="beginnr">{course.level1}</p>
                                  <p className="eight-wks">
                                    {course.duration} <span className="duration">(Jan.- March)</span>
                                  </p>
                                </div>
                                <div className="amount">
                                  <p>₦ {course.price.toLocaleString()}</p>
                                  <div className="ratings">
                                    <img src={star} alt="" />
                                    <p>4.5</p>
                                  </div>
                                </div>
                              </div>
                              <div className="adv-btn">
                                <div className="enroll">
                                  <Link
                                    to="/academy/tech-programs/checkout"
                                    state={{ course }}
                                  >
                                    Enroll Now <img src={arrow} alt="" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cohort">
                  <div className="cohort-container">
                    <div className="cohort-text">
                      <p className="jan">
                        Next Cohort Starts: January 2026 • <span className="reg">Registration is Now Open</span>
                      </p>
                      <p className="jany">
                        Join any of our major digital skills tracks and learn with live classes, mentorship & real projects.
                      </p>
                    </div>
                    <div className="cohort-btn">
                      <a href="">Register for Next Cohort</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === "bootcamps" && (
              <div className="content-box">
                <div className="cohort">
                  <div className="cohort-container">
                    <div className="cohort-text">
                      <p className="jan">
                        Next Cohort Starts: January 2026 • <span className="reg">Registration is Now Open</span>
                      </p>
                      <p className="jany">
                        Join any of our major digital skills tracks and learn with live classes, mentorship & real projects.
                      </p>
                    </div>
                    <div className="cohort-btn">
                      <a href="">Register for Next Cohort</a>
                    </div>
                  </div>
                </div>
                <div className="cohort-box">
                  <div className="box-scroll-area">
                    <div className="box-container">
                      {courses.map((course, index) => (
                        <div key={index} className="ux">
                          <div className="ux-container-boot">
                            <div className="design-boot">
                              <div className="design-text-boot">
                                <h2>{course.title2}</h2>
                                <div className="more">
                                  <p>{course.decription2}
                                    <a href="#" onClick={(e) => e.preventDefault()}>Learn More</a>
                                  </p>
                                </div>
                                <div className="line"></div>
                              </div>
                            </div>

                            <div className="level-container">
                              <div className="level-flex">
                                <div className="level">
                                  <p className="beginnr">{course.level2}</p>
                                  <p className="eight-wks">{course.duration1}</p>
                                </div>
                                <div className="amount">
                                  <p>₦ {course.price.toLocaleString()}</p>
                                  <div className="ratings">
                                    <img src={star} alt="" />
                                    <p>{course.rating}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="adv-btn">
                                <a href="">
                                  Register now <img src={arrow} alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cohort">
                  <div className="cohort-container">
                    <div className="cohort-text">
                      <p className="jan">
                        Next Cohort Starts: January 2026 • <span className="reg">Registration is Now Open</span>
                      </p>
                      <p className="jany">
                        Join any of our major digital skills tracks and learn with live classes, mentorship & real projects.
                      </p>
                    </div>
                    <div className="cohort-btn">
                      <a href="">Register for Next Cohort</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === "webinars" && (
              <div className="content-box">
                <div className="content-box">
                  <div className="cohort">
                    <div className="cohort-container">
                      <div className="cohort-text">
                        <p className="jan">Next Cohort Starts: January 2026 • <span className="reg">Registration is Now Open</span></p>
                        <p className="jany">Join any of our major digital skills tracks and learn with live classes, mentorship & real projects.</p>
                      </div>
                      <div className="cohort-btn">
                        <a href="">Register for Next Cohort</a>
                      </div>
                    </div>
                  </div>
                  <div className="cohort-box">
                    <div className="box-scroll-area">
                      <div className="box-container">
                        <div className="web-ux">
                          <div className="web-ux-container">
                            <div className="web-design">
                              <div className="web-design-text">
                                <img className="webinar" src={webinar} alt="" />
                                <h2>Remote work and Freelance tips for 2026</h2>
                                <div className="more">
                                  <p>Create a standout portfolio in record time with practical exercises.<a href="">Read More</a> </p>
                                </div>
                                <div className="line"></div>
                              </div>
                            </div>
                            <div className="level-container">
                              <div className="level-flex">
                                <div className="level">
                                  <p className="beginnr">Online - YouTube Live</p>
                                  <p className="eight-wks">March 10th, 2026</p>
                                </div>
                                <div className="amount">
                                  <p>Free Access</p>
                                </div>
                              </div>
                              <div className="adv-btn">
                                <a href="">Register now  <img src={arrow} alt="" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="web-ux">
                          <div className="web-ux-container">
                            <div className="web-design">
                              <div className="web-design-text">
                                <img className="webinar" src={webinar} alt="" />
                                <h2>Remote work and Freelance tips for 2026</h2>
                                <div className="more">
                                  <p>Create a standout portfolio in record time with practical exercises.<a href="">Read More</a> </p>
                                </div>
                                <div className="line"></div>
                              </div>
                            </div>
                            <div className="level-container">
                              <div className="level-flex">
                                <div className="level">
                                  <p className="beginnr">Online - YouTube Live</p>
                                  <p className="eight-wks">March 10th, 2026</p>
                                </div>
                                <div className="amount">
                                  <p>Free Access</p>
                                </div>
                              </div>
                              <div className="adv-btn">
                                <a href="">Register now  <img src={arrow} alt="" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="web-ux">
                          <div className="web-ux-container">
                            <div className="web-design">
                              <div className="web-design-text">
                                <img className="webinar" src={webinar} alt="" />
                                <h2>Remote work and Freelance tips for 2026</h2>
                                <div className="more">
                                  <p>Create a standout portfolio in record time with practical exercises.<a href="">Read More</a> </p>
                                </div>
                                <div className="line"></div>
                              </div>
                            </div>
                            <div className="level-container">
                              <div className="level-flex">
                                <div className="level">
                                  <p className="beginnr">Online - YouTube Live</p>
                                  <p className="eight-wks">March 10th, 2026</p>
                                </div>
                                <div className="amount">
                                  <p>Free Access</p>
                                </div>
                              </div>
                              <div className="adv-btn">
                                <a href="">Register now  <img src={arrow} alt="" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="web-ux">
                          <div className="web-ux-container">
                            <div className="web-design">
                              <div className="web-design-text">
                                <img className="webinar" src={webinar} alt="" />
                                <h2>Remote work and Freelance tips for 2026</h2>
                                <div className="more">
                                  <p>Create a standout portfolio in record time with practical exercises.<a href="">Read More</a> </p>
                                </div>
                                <div className="line"></div>
                              </div>
                            </div>
                            <div className="level-container">
                              <div className="level-flex">
                                <div className="level">
                                  <p className="beginnr">Online - YouTube Live</p>
                                  <p className="eight-wks">March 10th, 2026</p>
                                </div>
                                <div className="amount">
                                  <p>Free Access</p>
                                </div>
                              </div>
                              <div className="adv-btn">
                                <a href="">Register now  <img src={arrow} alt="" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="web-ux">
                          <div className="web-ux-container">
                            <div className="web-design">
                              <div className="web-design-text">
                                <img className="webinar" src={webinar} alt="" />
                                <h2>Remote work and Freelance tips for 2026</h2>
                                <div className="more">
                                  <p>Create a standout portfolio in record time with practical exercises.<a href="">Read More</a> </p>
                                </div>
                                <div className="line"></div>
                              </div>
                            </div>
                            <div className="level-container">
                              <div className="level-flex">
                                <div className="level">
                                  <p className="beginnr">Online - YouTube Live</p>
                                  <p className="eight-wks">March 10th, 2026</p>
                                </div>
                                <div className="amount">
                                  <p>Free Access</p>
                                </div>
                              </div>
                              <div className="adv-btn">
                                <a href="">Register now  <img src={arrow} alt="" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="web-ux">
                          <div className="web-ux-container">
                            <div className="web-design">
                              <div className="web-design-text">
                                <img className="webinar" src={webinar} alt="" />
                                <h2>Remote work and Freelance tips for 2026</h2>
                                <div className="more">
                                  <p>Create a standout portfolio in record time with practical exercises.<a href="">Read More</a> </p>
                                </div>
                                <div className="line"></div>
                              </div>
                            </div>
                            <div className="level-container">
                              <div className="level-flex">
                                <div className="level">
                                  <p className="beginnr">Online - YouTube Live</p>
                                  <p className="eight-wks">March 10th, 2026</p>
                                </div>
                                <div className="amount">
                                  <p>Free Access</p>
                                </div>
                              </div>
                              <div className="adv-btn">
                                <a href="">Register now  <img src={arrow} alt="" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cohort">
                    <div className="cohort-container">
                      <div className="cohort-text">
                        <p className="jan">Next Cohort Starts: January 2026 • <span className="reg">Registration is Now Open</span></p>
                        <p className="jany">Join any of our major digital skills tracks and learn with live classes, mentorship & real projects.</p>
                      </div>
                      <div className="cohort-btn">
                        <a href="">Register for Next Cohort</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
      <div>
        <Testimonials />
      </div>
      <div className="stress">
        <div className="stress-container">
          <div className="stress-content">
            <h2>Stress No More!</h2>
            <p>The Hub is open to anyone serious about growth. It’s free to <br /> join — all you need is the willingness to show up and grow.</p>
          </div>
          <div className="stress-btn">
            <a href="https://forms.gle/kR9PhDHTPqJFqUHq6" target="blank" className="stress-btn-join">Join the Hub</a>
          </div>
        </div>
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Readmore
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </section >
  );
}

export default Tech;
