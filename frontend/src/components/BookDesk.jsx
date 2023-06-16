import React from 'react'
import DeskCard from './Card'
import { useEffect,useState } from 'react'
import axios from 'axios'
import env from '../env.json'
import BasicDateCalendar from './Calender'
const BookDesk = () => {
  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     try {
  //       const response = await axios.get(env.backend_url_room)
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
     
  //   }
  //   fetchData()
  // },[])
  const [roomData,setRoomData] = useState([])
  const [startDate,setStartDate] = useState('')
  const [endDate,setEndDate] = useState('')
  const [time,setTime] = useState('')
  const [location,setLocation] = useState('')
  const handleSubmit = async(event) => {
    event.preventDefault();
    const body = {
      startDate,
      endDate,
      time,
      location
    }
    const response = await axios.post(env.backend_url_room,body)
    console.log(response);
    // console.log(body);
  }
  return (
    <>
      <div className="form" style={{width:'200px',backgroundColor:'lightgray'}}>
        <form onSubmit={handleSubmit} style={{padding:'20px'}}>
        <label>Starting Date</label>
        <input 
            type="date" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <br />
          <label>Ending Date</label>
        <input 
            type="date" 
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <br />
         <label>Enter Time</label>
        <input 
            type="time" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          <label>Location</label>
        <input 
            type="text" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
        <input type="submit" />
      </form>
      </div>
    </>
  )
}

export default BookDesk