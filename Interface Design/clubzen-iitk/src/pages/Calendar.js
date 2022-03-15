import React from 'react'
// import CalendarShow from '../components/calendar/CalendarShow'
import Clock from '../components/calendar/Clock'
import StartCalendar from '../components/calendar/StartCalendar'
import MainPageLayout from '../components/MainPageLayout'

const Calendar = () => {
  return (
      <MainPageLayout >
          <StartCalendar />
          <Clock />
          {/* <CalendarShow /> */}
    </MainPageLayout>
  )
}

export default Calendar