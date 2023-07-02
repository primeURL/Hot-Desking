const router = require("express").Router();
const Room = require("../models/Room");
const BookedRoom =require('../models/BookedRooms')

// Get All Bookings for Admin Panel
router.get('/getAllBookings',async(req,res)=>{
    try {
        const response = await BookedRoom.find({})
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send(error)
    }
})
// Booking Rooms Route
router.post("/", async (req, res) => {
    
	try {
        console.log(req.body);
        const newBooking = new BookedRoom(req.body)
        console.log('nB',newBooking);
        const room = await Room.findById({_id:req.body.roomId})
        room.currentBooking.push({fromDate:req.body.checkIn,toDate:req.body.checkOut,bookingStartTime:req.body.bookingStartTime,bookingEndTime:req.body.bookingEndTime,bookingId:newBooking._id})
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

// This route is for profile page, where we will get all bookings of particular user
router.post('/getBookingsOfUser',async(req,res)=>{
    try {
        const response = await BookedRoom.find({userId: req.body.userId})
        res.status(200).send(response)
    } catch (error) {
        console.log('errr',error);
        res.status(500).send(error)
    }
})
// Route to Cancel Booking
router.post('/cancelBooking',async(req,res)=>{
    const {bookingId,roomId} = req.body
    try {
        const bookedRoom = await BookedRoom.findOne({_id: bookingId})
        bookedRoom.status = 'cancelled'
        await bookedRoom.save()
        const room = await Room.findOne({_id:roomId})
        const tempArray = room.currentBooking.filter((item)=>item.bookingId.toString() !== bookingId)
        room.currentBooking = tempArray
        await room.save()
        return res.status(200).send('Your Booking Cancelled Successfully.')
    } catch (error) {
        console.log('errr',error);
        return res.status(500).send(error)
    }
})
module.exports = router;