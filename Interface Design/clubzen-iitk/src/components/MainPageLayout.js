import React from 'react'
import Footer from './Footer'
import Navs from './Navs'
import NavsWhite from './Navs_white'

const MainPageLayout = ({ children, color }) => {
    if (color === 'black') {
        return (
            <div>
                <Navs />
                {children}
                <Footer />
            </div>
        )
    }
    else {
        return (
            <div>
                <NavsWhite />
                {children}
                <Footer />
            </div>
        )
    }
}

export default MainPageLayout