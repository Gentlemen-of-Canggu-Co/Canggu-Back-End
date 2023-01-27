import { Link } from "react-router-dom"

function EventCard(props){
   
    const {spot} = props
    return(

        <div>
{spot.events && spot.events.map((singleEvent) =>{
  return        <div>

<Link to={`/events/${singleEvent._id}/edit`}><button>Edit singleEvent</button></Link>

        <h1>{singleEvent.name} @ {spot.name}</h1>

        <img style={{width: "100vw"}} src={singleEvent.eventImage} alt="singleEventpicture" />

        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <p>{singleEvent.date}</p>
            <p>{singleEvent.price}k IDR</p>
        </div>

        <p>{singleEvent.description}</p>

<div style={{display: "flex", flexDirection: "column"}}>
<button>Add to Calendar</button>
<button>See more Events</button>
</div>

        </div>
})}
        </div>
    )
}

export default EventCard