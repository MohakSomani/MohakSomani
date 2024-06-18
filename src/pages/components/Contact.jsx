import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Contact() {
  return (
    <div className="section-contact" id="contact">
      <div className="section-headings">
        <h1 className="heading-stroke-only">Contact</h1>
        <h1>Me</h1>
      </div>
      <div className="faffcontainer">
        <a href="https://github.com/MohakSomani">
          <FontAwesomeIcon icon={faGithub} className="fa fa-4x fafficon" />
        </a>
        <a href="https://www.linkedin.com/in/mohak-somani/">
          <FontAwesomeIcon icon={faLinkedin} className="fa fa-4x fafficon" />
        </a>
      </div>
      <div className="section-email">
        <div className="email-container">
          <a
            href="mailto:mohak.somani@students.iiit.ac.in"
            className="email-link"
          >
            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
            <span className="txtt">mohak.somani@students.iiit.ac.in</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
