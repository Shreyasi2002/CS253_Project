import React from "react";

import { Element } from "react-scroll";
import { StyledLink } from "../Links.styled";

import "./IndividualClub.css";

const IndividualClub = () => {
    return (
        <>
            <Element id="snt" name="snt">
                <div className="row">
                    <div className="header-start column">
                        <h6>SCIENCE & TECHNOLOGY (SnT)</h6>
                        <p>
                            A community of science and technology enthusiasts who love to
                            explore the unthinkable.
                        </p>
                    </div>
                    <div className="column">{/* empty */}</div>
                </div>
                {/* Grid */}

                <div className="row-grid">
                    <div className="column-grid">
                        <StyledLink to="/clubs/aeromodelling">
                            <div className="content-grid">
                                <img src="/Images/snt/Aeromodelling.png" alt="aeromodelling" />
                                <h3>Aeromodelling Club</h3>
                            </div>
                        </StyledLink>
                    </div>
                    <div className="column-grid">
                        <StyledLink to="/clubs/astronomy">
                            <div className="content-grid">
                                <img src="/Images/snt/Astronomy.png" alt="astronomy" />
                                <h3>Astronomy Club</h3>
                            </div>
                        </StyledLink>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/snt/bcs.png" alt="bcs" />
                            <h3>Brain & Cognitive Society</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/snt/Descon.png" alt="descon" />
                            <h3>Descon Society</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <StyledLink to="/clubs/electronics">
                            <div className="content-grid">
                                <img src="/Images/snt/Electronics.png" alt="electronics" />
                                <h3>Electronics Club</h3>
                            </div>
                        </StyledLink>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/snt/Finance.png" alt="finance" />
                            <h3>Finance & Analytics Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/snt/game dev.png" alt="game" />
                            <h3>Game Development Society</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/snt/consulting.png" alt="consulting" />
                            <h3>IITK Consulting Group</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/snt/Programming.png" alt="programming" />
                            <h3>Programming Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/snt/Robotics.png" alt="robotics" />
                            <h3>Robotics Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/snt/coffee science.png" alt="science" />
                            <h3>Science Coffee House</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/snt/SpeedCubing.png" alt="speedcubing" />
                            <h3>SpeedCubing Club</h3>
                        </div>
                    </div>
                </div>
            </Element>
            <Element id="mnc" name="mnc">
                <div className="row">
                    <div className="header-start column">
                        <h6>MEDIA & CULTURE (MnC)</h6>
                        <p>
                            The Media and Cultural Council at IITK is a hub for all activities
                            about media and culture.
                        </p>
                    </div>
                    <div className="column">{/* empty */}</div>
                </div>
                {/* Grid */}
                <div className="row-grid">
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/anime.png" alt="anime" />
                            <h3>Anime Society</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/book.jpeg" alt="book" />
                            <h3>Book Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/kos.png" alt="dance" />
                            <h3>Dance Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/debsoc.png" alt="debsoc" />
                            <h3>Debate & Discussion Society</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/dna.png" alt="dna" />
                            <h3>Design & Animation Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/drama.jpeg" alt="drama" />
                            <h3>Dramatics Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/ELS.jpeg" alt="els" />
                            <h3>English Literary Society</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/fac.png" alt="fac" />
                            <h3>Fine Arts Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/film.png" alt="film" />
                            <h3>Film Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/hh.png" alt="humour" />
                            <h3>Humour House</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/hss.png" alt="hss" />
                            <h3>Hindi Sahitya Sabha</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/mclub.png" alt="music" />
                            <h3>Music Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/photo.png" alt="photo_" />
                            <h3>Photography Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/qc.png" alt="quiz" />
                            <h3>Quiz Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/mnc/sfs.png" alt="sfs" />
                            <h3>Student Film Society</h3>
                        </div>
                    </div>
                </div>
            </Element>
            <Element id="gns" name="gns">
                <div className="row">
                    <div className="header-start column">
                        <h6>GAMES & SPORTS (GnS)</h6>
                        <p>
                            The voice and face of IIT Kanpur sports community, responsible for
                            management and conduction of all sporting events in the campus.
                        </p>
                    </div>
                    <div className="column">{/* empty */}</div>
                </div>
                {/* Grid */}
                <div className="row-grid">
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/adventure.jpeg" alt="adventure" />
                            <h3>Adventure Sports Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/archery.jpeg" alt="archery" />
                            <h3>Archery Society</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/bicycling.jpeg" alt="bicycling" />
                            <h3>Bicycling Society</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/card.jpeg" alt="card" />
                            <h3>Card & Board Games Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/boxing.jpeg" alt="boxing" />
                            <h3>Boxing Society</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/chess.jpeg" alt="chess" />
                            <h3>Chess Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/shooting.jpeg" alt="shooting" />
                            <h3>Shooting Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/skating.jpeg" alt="skating" />
                            <h3>Skating Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/taekwondo.jpeg" alt="taekwondo" />
                            <h3>Taekwondo Club</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/ultimate.jpeg" alt="ufs" />
                            <h3>Ultimate Frisbee Society</h3>
                        </div>
                    </div>
                    <div className="column-grid">
                        <div className="content-grid">
                            <img src="/Images/gns/esports_image.jpeg" alt="esports" />
                            <h3>E-Sports Society</h3>
                        </div>
                    </div>
                </div>
            </Element>
            <div>
                &nbsp;
                <br />
                <br />
                <br />
                <br />
                <br />
                &nbsp;
            </div>
        </>
    );
};

export default IndividualClub;
