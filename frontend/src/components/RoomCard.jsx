import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import env from "../env.json";
import axios from "axios";
import ofcThumbnail from "../assets/ofc-thumbnail.png";
const RoomCard = ({ data }) => {
  console.log("hello", data);

  return (
    <>
      <div></div>
      <div
        style={{ marginBottom: "15px", border: "2px solid orange", display: "flex" }}
      >
        <img src={data.image} alt="Room Thumbnail" style={{width:"500px"}}></img>
        <div style={{ border: "2px solid red", width: "50%" }}>
          <div>{data.roomName}</div>
          <div>{data.roomSize}</div>
          <Link to={"/singleroom/" + data._id}>
            <button>BookNow - {data._id}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
