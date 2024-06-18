import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="https://iiitaphyd-my.sharepoint.com/personal/mohak_somani_students_iiit_ac_in/_layouts/15/download.aspx?UniqueId=ae259b87-0996-48ce-a1eb-0bc9acd75440" className="btn-download">
        <i className="fas fa-download"></i> Download CV
      </a>
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