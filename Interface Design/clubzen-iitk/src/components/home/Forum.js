import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { GetCurrentUser } from '../../services/auth.service'

import './Forum.css'
import { StyledLink } from '../Links.styled'

const Forum = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = GetCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
      <div className='background-forum'>
          &nbsp;
          <div className='bounding-box'>
            <div className='container-forum'>
                <h6>JOIN THE EVENTS</h6>
                <h4>Explore the various events and workshops here at IIT Kanpur</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <br/>
            </div>
            {currentUser? (<StyledLink to='/news' className='forum-button'>
                <n>Explore Events</n>
                <FontAwesomeIcon className='icon-button' icon={faArrowRight} />
            </StyledLink>):(<StyledLink to='/login' className='forum-button'>
                <n>Explore Events</n>
                <FontAwesomeIcon className='icon-button' icon={faArrowRight} />
            </StyledLink>)}
            <br/><br/><br/>
            &nbsp;
          </div>
          <br/>
          &nbsp;
      </div>
  )
}

export default Forum