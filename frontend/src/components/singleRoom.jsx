import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/singleroom.css'
import axios from 'axios'
import env from '../env.json'

const SingleRoom = () => {
    const [data, setData] = useState([])
    const [capacity, setCapacity] = useState(0)
    const [bookingStartTime, setBookingStartTime] = useState('')
    const [bookingEndTime, setBookingEndTime] = useState('')
    const [formValues, setFormValues] = useState([{ name: "", email: "" }])
    const param = useParams();
    const userId = localStorage.getItem('userId')
    useEffect(() => {
        console.log('inside useEffect');
        const url = `${env.backend_url_room}/${param.id}`;
        console.log(url);
        const fectchRoom = async () => {
            try {
                console.log(url);
                const { data } = await axios.get(url);
                console.log('data', data);
                setCapacity(data.roomSize)
                setData(data)
            } catch (error) {
                console.log(error);
            }
        }
        fectchRoom()
    }, [])
    console.log('ca', capacity);
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setCapacity(preValue => preValue - 1)
        setFormValues([...formValues, { name: "", email: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
        setCapacity(preValue => preValue + 1)
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        const obj = {
            userId,
            roomId: param.id,
            roomName: data.roomName,
            roomSize: data.roomSize,
            checkIn: param.checkIn,
            checkOut: param.checkOut,
            bookingStartTime,
            bookingEndTime,
            meetingUsers: formValues
        }
        const response = await axios.post(env.backend_url_bookedroom, obj)
        console.log(response);
        alert(JSON.stringify(formValues));
    }

    return (<div>
        <h1 className='srRoomName'>Room Name : {data.roomName}</h1>
        <div className='srContainer'>
            <img src={data.image} alt="" className='srImg' />
            <div>
                <div className='srRoomDetails'> 
                    <p>CheckIn :<b> {param.checkIn}</b></p>
                    <p>CheckOut : <b>{param.checkOut}</b></p>
                    <p>Capacity :<b>{data.roomSize}</b> </p>
                </div>
                <div>
                    <div className='srBookingDetails'>
                        <h4 className='srBookingDetailsHeading'>Booking Details</h4>
                        <div className='srTimingInfo'>
                            <label htmlFor="">Booking Start Time</label>
                            <input type="time" value={bookingStartTime} onChange={(e) => setBookingStartTime(e.target.value)} /> <br />
                            <label htmlFor="">Booking End Time</label>
                            <input type="time" value={bookingEndTime} onChange={(e) => setBookingEndTime(e.target.value)} />
                        </div>
                        <form onSubmit={handleSubmit} className='srForm'>
                           
                            <h4>People Info</h4>
                            {formValues.map((element, index) => (
                                <div className="form-inline" key={index}>
                                    <label>Name</label>
                                    <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
                                    <label>Email</label>
                                    <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
                                    {
                                        index ?
                                            <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                                            : null
                                    }
                                </div>
                            ))}
                            <div className="sr-button-section">
                                {capacity > 1 && <button className="srbutton add" type="button" onClick={() => addFormFields()}>Add</button>}
                                <button className="srbutton submit" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}


export default SingleRoom