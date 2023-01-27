import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditEvent(){

const navigate = useNavigate()
const {eventId} = useParams()    
const API_URL= "http://localhost:5005"

const [name, setName] = useState()
const [description, setDescription] = useState("")
const [price, setPrice] = useState()
const [date, setDate] = useState("")
const [signupRequired, setSignupRequired] = useState(false)
const [signupLink, setSignupLink] = useState("No signup required.")
const [eventImage, setEventImage] = useState("https://img.freepik.com/premium-vector/red-beer-pong-pyramyd-illustration-plastic-cups-ball-with-splashing-beer-traditional-party-drinking-game_501173-311.jpg?w=2000")
const [ownerId, setOwnerId] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()

    const newEvent = {name, description, price, date, signupRequired, signupLink, eventImage, ownerId}

    axios.post(`${API_URL}/api/events`, newEvent)
        .then(() => {
            navigate("/");
        })
}



useEffect(() => {
    axios.get(`${API_URL}/api/events/${eventId}`)
      .then((response) => {
        setName(response.data.name)
        setDescription(response.data.description)
        setPrice(response.data.price)
        setDate(response.data.date)
        setSignupRequired(response.data.signupRequired)
        setSignupLink(response.data.signupLink)
        setEventImage(response.data.eventImage)
        setOwnerId(response.data._id)
      }
      )
      
  }, [eventId]) 


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
        <label>Date</label>
        <input type="date" name="date" value={date} onChange={(event)=> setDate(event.target.value)} />
        <br/>
        <label>Event image</label>
        <input type="string" name="eventImage" value={eventImage} onChange={(event)=> setEventImage(event.target.value)} />
        <br/>
        <label>Do you need to sign up?</label>
        <input type="checkbox" name="signupRequired" value={signupRequired} onChange={(event)=> setSignupRequired(event.target.value)} />
        <br/>
        <label>Link to Signup</label>
        <input type="text" name="signupLink" value={signupLink} onChange={(event)=> setSignupLink(event.target.value)} />
        <br/>
        <label>DONT CHANGE DUDE</label>
        <input type="text" name="ownerId" value={ownerId} onChange={(event)=> setOwnerId(event.target.value)} />
        <button type="submit">Edit Event</button>
    </form>
  </div>

    </div>
)
}

export default EditEvent