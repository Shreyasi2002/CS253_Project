import React from 'react'
import SearchEvents from '../components/calendar/CalendarShow'

import Clock from '../components/calendar/Clock'
import StartCalendar from '../components/calendar/StartCalendar'
import MainPageLayout from '../components/MainPageLayout'

const Calendar = () => {
  return (
      <MainPageLayout >
          <StartCalendar />
          <Clock />
          <SearchEvents />
    </MainPageLayout>
  )
}

export default Calendar