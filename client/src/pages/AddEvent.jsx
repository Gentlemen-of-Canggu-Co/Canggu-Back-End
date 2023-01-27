import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function AddEvent(){

const {spotId} = useParams()    

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [signupRequired, setSignupRequired] = useState(false)
    const [signupLink, setSignupLink] = useState("No signup required.")
    const [eventImage, setEventImage] = useState("https://img.freepik.com/premium-vector/red-beer-pong-pyramyd-illustration-plastic-cups-ball-with-splashing-beer-traditional-party-drinking-game_501173-311.jpg?w=2000")
    const ownerId = spotId

    const navigate = useNavigate()
    const API_URL = "http://localhost:5005";

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newEvent = {name, description, price, startDate, endDate, startTime, endTime, signupRequired, signupLink, eventImage, ownerId}
    
        axios.post(`${API_URL}/api/events`, newEvent)
            .then(() => {
                navigate("/");
            })
    }


    return(
        <div>

<div>
        <h3>Add new Event</h3>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
            <br/>
            <label>Description</label>
            <input type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)} />
            <br/>
            <label>Price</label>
            <input type="number" name="price" value={price} onChange={(event)=> setPrice(Number(event.target.value))} />
            <br/>
            <label>Start Date: YYYY-MM-DD</label>
            <input type="string" name="startDate" value={startDate} onChange={(event)=> setStartDate(event.target.value)} />
            <br/>
            <label>End Date: YYYY-MM-DD</label>
            <input type="string" name="endDate" value={endDate} onChange={(event)=> setEndDate(event.target.value)} />
            <br/>
            <br/>
            <label>Start Time: HH:MM</label>
            <input type="string" name="startTime" value={startTime} onChange={(event)=> setStartTime(event.target.value)} />
            <br/>
            <label>End Time: HH:MM</label>
            <input type="string" name="endTime" value={endTime} onChange={(event)=> setEndTime(event.target.value)} />
            <label>Event image</label>
            <input type="string" name="eventImage" value={eventImage} onChange={(event)=> setEventImage(event.target.value)} />
            <br/>
            <label>Do you need to sign up?</label>
            <input type="checkbox" name="signupRequired" value={signupRequired} onChange={(event)=> setSignupRequired(event.target.value)} />
            <br/>
            <label>Link to Signup</label>
            <input type="text" name="signupLink" value={signupLink} onChange={(event)=> setSignupLink(event.target.value)} />
        
            <button type="submit">Add new Event</button>
        </form>
      </div>

        </div>
    )
}


export default AddEvent