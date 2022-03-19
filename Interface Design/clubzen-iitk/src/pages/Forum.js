import React from 'react'
import Discussion from '../components/forum/Discussion'
import StartForum from '../components/forum/StartForum'
import MainPageLayout from '../components/MainPageLayout'

const Forum = () => {
  return (
      <MainPageLayout>
          <StartForum /> 
          <Discussion />
      </MainPageLayout>
  )
}

export default Forum