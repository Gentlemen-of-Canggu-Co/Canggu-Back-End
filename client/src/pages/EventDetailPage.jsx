import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EventDetailPage(){

const API_URL= "http://localhost:5005"
const {eventId} = useParams()
console.log("ID", eventId)
const [event, setEvent] = useState({})

useEffect(() => {
  axios.get(`${API_URL}/api/events/${eventId}`)
    .then(response => setEvent(response.data))
}, [eventId])



    return(
        <div>
        <h1>{event.name} @ Spot Name</h1>

        <img style={{width: "100vw"}} src={event.eventImage} alt="eventpicture" />

        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <p>{event.date}</p>
            <p>{event.price}k IDR</p>
        </div>

        <p>{event.description}</p>

<div style={{display: "flex", flexDirection: "column"}}>
<button>Add to Calendar</button>
<button>See more Events</button>
</div>


        </div>
    )
}


export default EventDetailPage