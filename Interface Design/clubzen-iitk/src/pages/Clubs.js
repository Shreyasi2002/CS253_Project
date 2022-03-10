import React from 'react'
import IndividualClub from '../components/clubs/IndividualClub'
import StartClub from '../components/clubs/Start_club'

import MainPageLayout from '../components/MainPageLayout'

const Clubs = () => {
  return (
    <MainPageLayout>
          <StartClub />
          <IndividualClub />
    </MainPageLayout>
  )
}

export default Clubs