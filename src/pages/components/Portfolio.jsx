import React from "react";
import PortfolioCard from "./PortfolioCard";
import { portfolioItems } from "./projects"; // Import portfolioItems from project.js

function Portfolio() {
  return (
    <div className="section-portfolio" id="portfolio">
      <div className="section-headings">
        <h1 className="heading-stroke-only">My</h1>
        <h1>Projects</h1>
      </div>

      <div className="section-portfolio-grid">
        {portfolioItems.map((item) => (
          <PortfolioCard
            key={item.id}
            imgSrc={item.imgSrc}
            altText={item.altText}
            title={item.title}
            details={item.details}
            githubLink={item.githubLink}
            websiteLink={item.websiteLink}
            demoLink={item.demoLink}
          />
        ))}
      </div>
      <div className="row mt-80">
        <a
          href="https://github.com/MohakSomani"
          target="_blank"
          data-text="MORE"
          className="link-more"
          rel="noopener noreferrer"
        >
          MORE
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
