import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import HomePage from "./Pages/Home/Home";
import Events from "./Pages/Events/Events.jsx";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />         
        <Route path="/home" element={<HomePage />} />    
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
