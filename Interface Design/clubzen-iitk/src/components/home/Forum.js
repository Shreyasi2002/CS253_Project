import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './Forum.css'
import { StyledLink } from '../Links.styled'

const Forum = () => {
  return (
      <div className='background-forum'>
          &nbsp;
          <div className='bounding-box'>
            <div className='container-forum'>
                <h6>JOIN THE DISCUSSION</h6>
                <h4>Explore the forum and find answers to all of your questions</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <br/>
            </div>
            <StyledLink to='/forum' className='forum-button'>
                <n>Explore Forum</n>
                <FontAwesomeIcon className='icon-button' icon={faArrowRight} />
            </StyledLink>
            <br/><br/><br/>
            &nbsp;
          </div>
          <br/>
          &nbsp;
      </div>
  )
}

export default Forum