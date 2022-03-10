import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { StyledLink } from '../Links.styled'
import '../home/Councils.css'

const IndividualClub = () => {
  return (
    <>
          <div className='row'>
              <div className='header-start column'>
                <h6>SCIENCE & TECHNOLOGY (SnT)</h6>
                <p>A community of science and technology enthusiasts who love to explore the unthinkable.</p>
              </div>
              <div className='column'>
                  {/* empty */}
              </div>
          </div>
          <div className='row2'>
              <div className='column image-column'>
                <img src='/Images/festival.png' alt='festival'/>
              </div>
              <div className='column council-content'>
                  <h2>FESTIVALS</h2>
                  <p>
                      Antaragni, IIT Kanpur boasts the status of being one of India's
                      biggest cultural festivals, annually entertaining a crowd
                      with a footfall of more than ... <br/>Techkriti, the technical
                      and entrepreneurship festival by IIT Kanpur ... <br/>
                      Udghosh, an exhibition of sporting fervour, and success in the meet 
                      that has been ratified by the success ... 
                  </p>
                  <br/><br/>
                  <StyledLink to='/fests' className='home-button'>
                      <n>Discover</n>
                      <FontAwesomeIcon className='icon-button' icon={faArrowRight} />
                  </StyledLink>
                  <br/><br/>
              </div>
          </div>
          <div className='row1'>
              <div className='column council-content'>
                  <h2>COUNCILS</h2>
                  <p>
                      The four Councils - Academics & Career, Games & Sports,
                      Media & Cultute and Science & Technology, along with cells
                      carry out the executive
                      responsibilities of the Students' Gymkhana. <br/>Each council
                      executes affairs pertaining to an overarching purpose. The
                      Councils comprise Clubs, Hobby Groups, and Institute Teams,
                      which cater to specific activities.
                  </p>
                  <br/><br/>
                  <StyledLink to='/councils' className='home-button'>
                      <n>Discover</n>
                      <FontAwesomeIcon className='icon-button' icon={faArrowRight} />
                  </StyledLink>
              </div>
              <div className='column image-column'>
                <img src='/Images/Council_IITK.png' alt='councils'/>
              </div>
          </div>
      </>
  )
}

export default IndividualClub