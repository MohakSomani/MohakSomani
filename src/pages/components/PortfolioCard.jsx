import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faVideo } from '@fortawesome/free-solid-svg-icons';

function PortfolioCard({ imgSrc, altText, title, details, githubLink, websiteLink, demoLink }) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const openLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <div className="portfolio-card" onClick={handleCardClick}>
        <img src={imgSrc} alt={altText} />
        <div className="portfolio-card-details">
          <h4>{title}</h4>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="modal-body">
              <img src={imgSrc} alt={altText} className="modal-image" />
              <h2>{title}</h2>
              <div className="modal-buttons">
                <button className="modal-button git" onClick={() => openLink(githubLink)}>
                  <FontAwesomeIcon icon={faGithub} className="icon" /> GitHub
                </button>
                <button className="modal-button web" onClick={() => openLink(websiteLink)}>
                  <FontAwesomeIcon icon={faLink} className="icon" /> Website
                </button>
                <button className="modal-button vid" onClick={() => openLink(demoLink)}>
                  <FontAwesomeIcon icon={faVideo} className="icon" /> Demo Video
                </button>
              </div>
              <div className="modal-details">
                <p>{details}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PortfolioCard;
