import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar.jsx";
import HomePage from "./Pages/Home/Home";
import Events from "./Pages/Events/Events.jsx";
import JointheHub from "./Pages/JointheHub/JointheHub.jsx";
import About from "./Pages/About/About.jsx";
import Tech from "./Pages/Tech/tech.jsx";
import Academy from "./Pages/Academy/Academy.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx"; 
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

function App() {
  const location = useLocation();

  
  const hideNavbar = location.pathname.includes("/checkout");

  return (
    <>
      <ScrollToTop />
      {/* <AnnouncementBar /> */}
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/hub" element={<JointheHub />} />
        <Route path="/about" element={<About />} />
        <Route path="/academy/techprograms" element={<Tech />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/academy/techprograms/checkout" element={<Checkout />} /> 
      </Routes>
    </>
  );
}

export default App;
