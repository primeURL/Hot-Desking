import * as React from "react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import env from "../env.json";
import axios from "axios";
import RoomCard from "./RoomCard";
import Button from "@mui/material/Button";

export default function Rooms() {
  const [data, setData] = useState([]);
  const param = useParams();
  useEffect(() => {
    console.log("inside useEffect");
    const url = `${env.backend_url_room}/${param.location}/${param.checkIn}/${param.checkOut}`;
    console.log(url);
    const fectchRooms = async () => {
      try {
        console.log(url);
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fectchRooms();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div style={{margin:'10px',border:'2px solid red',width:'20%'}}>
        <div style={{padding:'15px'}}>
          <Button variant="contained">Available Rooms</Button>
        </div>
        <div style={{padding:'15px'}}>
          <Button variant="contained">Booked Rooms</Button>
        </div>
      </div>
      <div style={{margin:'10px',border:'2px solid green',width:'80%'}}>
        {data.map((d) => {
          return <RoomCard  data={d} />;
        })}
      </div>
    </div>
  );
}
