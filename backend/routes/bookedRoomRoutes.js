const router = require("express").Router();
const Room = require("../models/Room");
const BookedRoom =require('../models/BookedRooms')


router.post("/", async (req, res) => {
    
	try {
        console.log(req.body);
        const newBooking = new BookedRoom(req.body)
        console.log('nB',newBooking);
        const room = await Room.findById({_id:req.body.roomId})
        room.currentBooking.push({fromDate:req.body.checkIn,toDate:req.body.checkOut,bookingStartTime:req.body.bookingStartTime,bookingEndTime:req.body.bookingEndTime})
        room.isBooked = true
        await room.save()
        console.log('room',room);
        await newBooking.save()
        // console.log('resp',resp);
        res.status(200).send({message:'Room Booked Successfully'})
    } catch (error) {
        console.log('errr',error);
        res.status(500).send(error)
    }
});


module.exports = router;