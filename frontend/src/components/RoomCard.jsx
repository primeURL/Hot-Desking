import React from "react";
import '../styles/roomcard.css'
import {Link,useNavigate} from "react-router-dom";

const RoomCard = ({ data,checkIn,checkOut,btnFlag}) => {
  
  const navigate = useNavigate()
  function bookRoom(){
    let token = localStorage.getItem('token')
    if(!token){
      navigate('/login')
    }else{
      navigate(`/singleroom/${checkIn}/${checkOut}/${data._id}`)
    }
  }
  return (
    <>
      <div className="roomCardContainer">
        <img src={data.image} alt="Room Thumbnail" className="roomCardImg"></img>
        <div className="roomCardRightContainer">
          <div>
            <p className="roomCardRoomName"> Room-Name : <b>{data.roomName}</b></p>
          </div>
          <div>
            <p>Capacity : <b> {data.roomSize}</b></p>
          </div>
          <div>
            <p>Rent Per Hour : <b> {data.rentPerHr}</b></p>
          </div>
          { btnFlag && (<button className="roomCardbtn" onClick={bookRoom}>BookNow</button>) }
        
        </div>
      </div>
    </>
  );
};

export default RoomCard;
