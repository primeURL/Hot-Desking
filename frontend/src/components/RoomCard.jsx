import React from "react";
import { Link } from "react-router-dom";
import '../styles/roomcard.css'
const RoomCard = ({ data,checkIn,checkOut,btnFlag}) => {

  return (
    <>
      <div className="roomCardContainer">
        <img src={data.image} alt="Room Thumbnail" className="roomCardImg"></img>
        <div className="roomCardRightContainer">
          <div>
            <h3 className="roomCardRoomName"> Room-Name : {data.roomName}</h3>
          </div>
          <div>
            <h3>Capacity : {data.roomSize}</h3>
          </div>
          { btnFlag && (  <Link to={`/singleroom/${checkIn}/${checkOut}/${data._id}`}>
            <button className="roomCardbtn">BookNow</button>
          </Link>) }
        
        </div>
      </div>
    </>
  );
};

export default RoomCard;
