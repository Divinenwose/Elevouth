import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Pause from "../../components/Pause/Pause.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import Gets from "../../components/Gets/Gets.jsx";
import Teams from "../../components/Teams/Teams.jsx";
import Story from "../../components/Story/Story.jsx";
import Submit from "../../components/Summit/Summit.jsx";
import Grow from "../../components/Grow/Grow.jsx";
import Candidates from "../../components/Candidates/Candidates.jsx";
import Path from "../../components/Path/Path.jsx";
import TestimonialSection from "../../components/Testimonials/Testimonials.jsx";
import FAQSection from "../../components/FAQ/FAQsection.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const HomePage = () => {
    return(
       <div>
         <Hero />
         <Pause />
         <Cards />
         <Gets />
         <Teams />
         <Story />
         <Submit />
         <Grow />
         <Candidates />
         <Path />
         <TestimonialSection />
         <FAQSection />
         <Contact />
         <Footer />
       </div>
    )
}

export default HomePage;