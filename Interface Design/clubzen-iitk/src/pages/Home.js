import React from 'react'
import Councils from '../components/home/Councils'
import Forum from '../components/home/Forum'
import Video from '../components/home/Video'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  return (
      <MainPageLayout color='black'>
          <Video />
          <Councils />
          <Forum />
      </MainPageLayout>
  )
}

export default Home