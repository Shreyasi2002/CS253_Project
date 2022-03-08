import React, { memo } from 'react';
import { useLocation } from 'react-router';

import { LinkStyled } from './Navs.styled';

const LINKS = [
    { to: '/news', text: 'News' },
    { to: '/calendar', text: 'Calendar' },
    { to: '/forum', text: 'Forum'}
];

const DROPDOWN = [
    { to: '/anc', text: 'Academics & Career' },
    { to: '/gns', text: 'Games & Sports' },
    { to: '/mnc', text: 'Media & Culture' },
    { to: '/snt', text: 'Science & Technology' },
    { to: '/fests', text: 'Festivals'},
];

const Navs = () => {
    const location = useLocation();

    return (
        <div>
            <div className='topnav' id='navigation'>
                {LINKS.map(item => (
                    <li key={item.to}>
                        <LinkStyled
                            to={item.to}
                            className={
                                item.to === location.pathname ? 'active' : ''
                            }
                        >
                            {item.text}
                        </LinkStyled>
                    </li>
                ))}
            </div>
        </div>
    );
};


export default memo(Navs);
