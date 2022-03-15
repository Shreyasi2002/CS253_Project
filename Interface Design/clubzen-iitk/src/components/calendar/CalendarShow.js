import React from 'react'

import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

const CalendarShow = () => {

  const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
  const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 6);
  const maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 25);
  return (
    <CalendarComponent value={dateValue} min={minDate} max={maxDate}
    isMultiSelection={true}></CalendarComponent>
  )
}

export default CalendarShow
