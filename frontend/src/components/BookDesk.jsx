import React from "react";
import DeskCard from "./Card";
import { useEffect, useState,createContext } from "react";
import axios from "axios";
import env from "../env.json";
import BasicDateCalendar from "./Calender";
import Rooms from "./Rooms";
import "../styles/BookDesk.css";
import {Link} from 'react-router-dom'
import { Select, MenuItem, Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";

export const BookDeskContext = createContext()

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
  let [roomData, setRoomData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState('default');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  function dateConverter(str){
    var date = new Date(str)
    let mnth = ("0" + (date.getMonth()+1)).slice(-2)
    let day  = ("0" + date.getDate()).slice(-2);
    let year = date.getFullYear();
    return `${day}-${mnth}-${year}`
 }
  function handleCheckIn(date){
    setCheckIn(dateConverter(date))
  }
  function handleCheckOut(date){
    setCheckOut(dateConverter(date))
  }
  return (<>
      <div className="container">
      <div className="sub-container-1">
        <h6>It's time to Meet</h6>
        <h1>Discover the Meeting Rooms </h1>
        <h1>Best In The World</h1>
        <h6>
          When you Book Meeting Room,do you want to make sure your room has all
          necessary aminients? Here is the solution
        </h6>
      </div>
      <form style={{ padding: "20px" }}>
        <div className="form sub-container-2">
          <div className="location-container">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="location-input"
              label='Age'
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
            >
              <MenuItem disabled value="default">
                Select Location
              </MenuItem>
              <MenuItem value="Pune">Pune</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Nashik">Nashik</MenuItem>
            </Select>
          </div>
          <div className="dates-container">
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Check In" onChange={handleCheckIn} className="date-picker" />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Check Out" onChange={handleCheckOut} className="date-picker" />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <Button
              className="search-btn"
              variant="contained"
              startIcon={<SearchIcon />}
            >
              <Link to={'/rooms/'+location+'/'+checkIn+'/'+checkOut}>Search</Link>
            </Button>
          </div>
        </div>
      </form>
    </div>
  </>
    
    
    
  );
};

export default BookDesk;
