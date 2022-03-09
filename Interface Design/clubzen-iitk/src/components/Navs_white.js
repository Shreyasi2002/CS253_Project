import React from 'react'
import { useLocation } from 'react-router';

import { NavLink1 } from './Links.styled'

import './Navs_white.css'

const LINKS = [
    { to: '/councils', text: 'Councils & Fests' },
    { to: '/news', text: 'News' },
    { to: '/forum', text: 'Forum' },
];

const NavsWhite = () => {
  const location = useLocation();
  return (
      <header>
          <nav className='nav-white'>
              <h3 className='nav-logo-white'><NavLink1 to="/">ClubZen IITK</NavLink1></h3>
              <ul className='nav-items-white'>
                {LINKS.map(item => (
                        <li key={item.to}>
                            <NavLink1
                                to={item.to}
                                className={
                                    item.to === location.pathname ? 'active' : ''
                                }
                            >
                                {item.text}
                            </NavLink1>
                        </li>
                    ))}
              </ul>
          </nav>
      </header>
  )
}

export default NavsWhite