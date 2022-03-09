import React from 'react'
import { Link } from 'react-router-dom'

import './Navs.css'

const Navs = () => {
  return (
      <header>
          <nav className='nav'>
              <h3 className='nav-logo'>ClubZen IITK</h3>
              <ul className='nav-items'>
                  <li> <Link to></Link> Councils & Fests</li>
                  <li>News</li>
                  <li>Forum</li>
              </ul>
          </nav>
      </header>
  )
}

export default Navs