import React from 'react'
import GalleryAeromodelling from '../../components/clubs/aeromodelling/GalleryAeromodelling'
import StartHead from '../../components/clubs/aeromodelling/StartHead'

import MainPageLayout from '../../components/MainPageLayout'


const Aeromodelling = () => {
  return (
      <MainPageLayout color='black'>
          <StartHead />
          <GalleryAeromodelling />
      </MainPageLayout>
  )
}

export default Aeromodelling