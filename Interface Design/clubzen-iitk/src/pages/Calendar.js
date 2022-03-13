import React from 'react'
import Clock from '../components/calendar/Clock'
import StartCalendar from '../components/calendar/StartCalendar'
import MainPageLayout from '../components/MainPageLayout'

const Calendar = () => {
  return (
      <MainPageLayout >
          <StartCalendar />
          <Clock />
    </MainPageLayout>
  )
}

export default Calendar