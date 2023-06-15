import React from 'react'
import DeskCard from './Card'
import BasicDateCalendar from './Calender'
const BookDesk = () => {
  return (
    <div style={{display:'-webkit-flex'}}>
      <DeskCard></DeskCard>
      <BasicDateCalendar/>
    </div>
  )
}

export default BookDesk