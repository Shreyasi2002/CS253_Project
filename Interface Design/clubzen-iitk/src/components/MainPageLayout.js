import React from 'react'
import Footer from './Footer'
import Navs from './Navs'

const MainPageLayout = ({ children }) => {
  return (
      <div>
          <Navs />
          {children}
          <Footer />
      </div>
  )
}

export default MainPageLayout