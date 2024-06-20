import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="https://drive.google.com/uc?export=download&id=1zAqCkeOAgqQnyI6RpxRmmXrKcwzGgg_V" className="btn-download">
        <i className="fas fa-download"></i> Download CV
      </a>
      <h5>THE WEBSITE IS STILL IN PROGRESS..</h5>
      <div className="nav-links">
        <a href="#home" className="nav-link nav-link-active">
          HOME
        </a>
        <a href="#portfolio" className="nav-link">
          PROJECTS
        </a>
        <a href="#about" className="nav-link">
          ABOUT
        </a>
        <a href="#contact" className="nav-link">
          CONTACT
        </a>
      </div>
    </nav>
  );
}

export default Navbar;