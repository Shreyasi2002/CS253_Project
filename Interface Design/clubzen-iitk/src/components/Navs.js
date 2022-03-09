import React from 'react'

import './Navs.css'

const Navs = () => {
  return (
      <header>
          <nav className='nav'>
              <h3 className='nav-logo'>ClubZen IITK</h3>
              <ul className='nav-items'>
                  <li>Councils & Fests</li>
                  <li>News</li>
                  <li>Forum</li>
              </ul>
          </nav>
      </header>
  )
}

export default Navs