import React, { useState } from "react";
import "./Home.css";
import backgroundImg from "../../Assest/bglap.jpeg";
import backgroundImg2 from "../../Assest/greylap.png";
import Navbar from "../../component/Navbar/Navbar";
import Contact from "../../component/Navbar/Contact/Contact";

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const showForm = () => {
    setShowContact(true);
  };
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Navbar />
      
      <div className="description" style={{ backgroundImage: `url(${backgroundImg2})`, backgroundSize:"cover" }}>
        <div className="heading">
          <h1 className="simple-shadow">Free Workshop</h1>
          <button className="button" onClick={showForm}>
            Click to register
          </button>
        </div>
        <p className="simple-shadow">Register For Trabot MemberShip</p>
      </div>
      {showContact && (
        <div className="contact-overlay">
          <Contact setShowContact={setShowContact} />
        </div>
      )}
    </div>
  );
};

export default Home;
