import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/starred', text: 'Favorites' },
];

const Navs = () => {
    const location = useLocation();

    return (
        <div>
            <>
                {LINKS.map(item => (
                    <li key={item.to}>
                        <l
                            to={item.to}
                            className={
                                item.to === location.pathname ? 'active' : ''
                            }
                        >
                            {item.text}
                        </l>
                    </li>
                ))}
            </>
        </div>
    );
};

export default memo(Navs);
