import React from 'react'
import { useLocation } from 'react-router';

import { NavLink } from './Links.styled'

import './Navs.css'

const LINKS = [
    { to: '/councils', text: 'Councils' },
    { to: '/fests', text: 'Festivals' },
    { to: '/clubs', text: 'Clubs'},
    { to: '/news', text: 'News & Feed' },
    { to: '/forum', text: 'Forum' },
];

const Navs = () => {
  const location = useLocation();
  return (
      <header>
          <nav className='nav'>
              <h3 className='nav-logo'><NavLink to="/">ClubZen IITK</NavLink></h3>
              <ul className='nav-items'>
                {LINKS.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={
                                    item.to === location.pathname ? 'active' : ''
                                }
                            >
                                {item.text}
                            </NavLink>
                        </li>
                    ))}
              </ul>
          </nav>
      </header>
  )
}

export default Navs