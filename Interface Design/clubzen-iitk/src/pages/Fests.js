import React from 'react'
import IndividualFest from '../components/festivals/Individual_fest'
import StartFest from '../components/festivals/Start_fest'

import MainPageLayout from '../components/MainPageLayout'

const Fests = () => {
  return (
      <MainPageLayout color='black'>
          <StartFest /> 
          <IndividualFest />
    </MainPageLayout>
  )
}

export default Fests