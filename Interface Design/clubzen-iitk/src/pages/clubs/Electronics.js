import React from 'react'
import GalleryElectronics from '../../components/clubs/electronics/GalleryElectronics'
import StartHead from '../../components/clubs/electronics/StartHead'

import MainPageLayout from '../../components/MainPageLayout'


const Electronics = () => {
  return (
      <MainPageLayout color='black'>
          <StartHead />
          <GalleryElectronics />
      </MainPageLayout>
  )
}

export default Electronics