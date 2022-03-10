import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { StyledLink } from "../Links.styled";
import "../council_fest/Individual.css";

const IndividualFest = () => {
  return (
    <>
      <div className="row-council2">
        <div className="column-council image-council">
          <img src="/Images/Antaragni.jpg" alt="snt" />
        </div>
        <div className="column-council">
          <div className="row-content2">
            <h4>ANTARAGNI</h4>
            <p>
              Antaragni is the annual cultural festival of IIT Kanpur and one of
              the biggest across Asia. With a legacy of 55 years, Antaragni
              entertains a footfall of over 130,000 to provide a highly
              competitive national level platform and host concerts of artists
              with international repute.
              <br />
              The four-day-long festival attracts participation from over 350
              colleges of India, and has garnered substantial media attention
              over the years. It features professional shows, competitions,
              performances by amateur rock bands, DJs, fashion shows, Indian
              folk dances, and much more.
            </p>
          </div>
          <StyledLink to="/fests/antaragni" className="row-button">
            <n>Explore</n>
            <FontAwesomeIcon className="icon-button" icon={faArrowRight} />
          </StyledLink>
        </div>
      </div>
      <br />
      <br />
      <div className="row-council">
        <div className="column-council">
          <div className="row-content">
            <h4>UDGHOSH</h4>
            <p>
              Udghosh, IIT Kanpur, India's largest Inter-collegiate Sports
              Festival provides an arena to lock horns in an epic battle of
              sports.
              <br />
              IIT Kanpur is equipped with the state of of the art facility in
              the sector of sports. Udghosh organises 22 sports events with a
              huge participation of both boys and girls from over 200 colleges
              across the country. Over 2500 students participants take part in a
              broad spectrum of fine sports events and informal events, followed
              by various other attractions like pro-Nights, comedy nights etc.
            </p>
          </div>
          <StyledLink to="#" className="row-button">
            <n>Explore</n>
            <FontAwesomeIcon className="icon-button" icon={faArrowRight} />
          </StyledLink>
        </div>
        <div className="column-council image-council">
          <img src="/Images/Udghosh.png" alt="snt" />
        </div>
      </div>
      <br />
      <br />
      <div className="row-council2">
        <div className="column-council image-council">
          <img src="/Images/Techkriti.png" alt="snt" />
        </div>
        <div className="column-council">
          <div className="row-content2">
            <h4>TECHKRITI</h4>
            <p>
              Techkriti is an annual four-day inter-collegiate technical and
              entrepreneurship festival at the Indian Institute of Technology
              Kanpur. The festival is usually held in March.
              <br />
              Techkriti is an entirely student organized festival. The structure
              of the organising team is four-tiered. Leading the team were the
              Festival Coordinators along with a team of Heads, each with an
              allotted portfolio. Administrative portfolios include marketing,
              media and publicity, finance, security, hospitality and show
              management. 
            </p>
          </div>
          <StyledLink to="#" className="row-button">
            <n>Explore</n>
            <FontAwesomeIcon className="icon-button" icon={faArrowRight} />
          </StyledLink>
        </div>
      </div>
    </>
  );
};

export default IndividualFest;
