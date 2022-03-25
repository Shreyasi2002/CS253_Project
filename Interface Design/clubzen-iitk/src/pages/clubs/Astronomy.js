import React from 'react'
import GalleryAstronomy from '../../components/clubs/astronomy/GalleryAstronomy'
import StartHead from '../../components/clubs/astronomy/StartHead'
import MainPageLayout from '../../components/MainPageLayout'


const Astronomy = () => {
  return (
      <MainPageLayout color='black'>
          <StartHead />
          <GalleryAstronomy />
      </MainPageLayout>
  )
}

export default Astronomy