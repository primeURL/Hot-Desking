import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/singleroom.css'
import axios from 'axios'
import env from '../env.json'

const SingleRoom = () => {
    const [data,setData] = useState([])
    const [capacity,setCapacity] = useState(0)
    const [formValues, setFormValues] = useState([{ name: "", email : ""}])
    const param = useParams();

    useEffect(()=>{
        console.log('inside useEffect');
        const url = `${env.backend_url_room}/${param.id}`;
        console.log(url);
        const fectchRoom = async()=>{
            try {
                console.log(url);
				const {data} = await axios.get(url);
                console.log('data',data);
                setCapacity(data.roomSize)
                setData(data)
            } catch (error) {
                console.log(error);
            }
        }
        fectchRoom()
    },[])
    console.log('ca',capacity);
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
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return ( <>
     <div style={{border:'2px solid black',margin:'50px'}}>
            <img src={data.image} alt="" style={{width:'500px'}}/>
            <h1>Room Name : {data.roomName  }</h1>
            <h3>Capacity : {data.roomSize}</h3>
            <div>
                <h4>Booking Details</h4>
                <form  onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Enter Start Time</label>
                        <input type="time" /> <br />
                        <label htmlFor="">Number of Hours</label>
                        <input type="number" />
                    </div>
                <h4>People Info</h4>   
                {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                    <label>Name</label>
                    <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
                    <label>Email</label>
                    <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
                    {
                        index ? 
                        <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                        : null
                    }
                    </div>
                ))}
                <div className="button-section">
                    {capacity > 1 && <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>}
                    <button className="button submit" type="submit">Submit</button>
                </div>
      </form>
            </div>

        </div>
    </>
    )
}


export default SingleRoom