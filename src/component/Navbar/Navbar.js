import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log(show);
  };

  const handleOpen = () => {
    setShow(true);
    console.log(show);
  };

  return (
    <header className="header">
      <a href="#" className="logo outlined-text">
        Trabot Research
      </a>
      <div className="icons">
        {show ? (
          <CloseIcon
            className="close-icon"
            onClick={handleClose}
            style={{ color: "white", fontSize: "2.5rem" }}
          />
        ) : (
          <MenuIcon
            onClick={handleOpen}
            style={{ color: "white", fontSize: "2.5rem" }}
          />
        )}
      </div>
      <nav className={`navbar ${show ? "open" : ""} simple-shadow`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Member</a>
        <a href="#">Login</a>
      </nav>
    </header>
  );
};

export default Navbar;
