import React from 'react'
import { Link } from 'react-router-dom'

import './Navs.css'

const Navs = () => {
  return (
      <header>
          <nav className='nav'>
              <h3 className='nav-logo'><Link to="/">ClubZen IITK</Link></h3>
              <ul className='nav-items'>
                  <li><Link to="/councils">Councils & Fests</Link></li>
                  <li><Link to='/news'>News</Link></li>
                  <li><Link to='/forum'>Forum</Link></li>
              </ul>
          </nav>
      </header>
  )
}

export default Navs