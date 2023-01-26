import {useState, useEffect} from "react"
import axios from 'axios';
import { Link } from "react-router-dom";


function EventList(){


  const [events, setEvents] = useState([])
    const API_URL= "http://localhost:5005"
    
    useEffect(() => {
        axios.get(`${API_URL}/api/events`)
            .then(response => setEvents(response.data))
    }, [])

    return(

<div>
<h1>Upcoming events in Canggus Spots</h1>

{events.map((event) => {
        return      <Link key={event._id} to={`/events/${event._id}`}>     <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_YG7-dxa-Y6LweEAKHqXDgt_ZkPx1XZ5Yg&usqp=CAU" alt="event title"/>
  <div class="card-body">
  <p class="card-text">{event.name}</p>
    <p class="card-text">Spot Name | {event.date}</p>
  </div>
</div> </Link>
      })}


<p>A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, notably espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages. In continental Europe, cafés serve alcoholic drinks. A coffeehouse may also serve food, such as light snacks, sandwiches, muffins, fruit, or pastries. Coffeehouses range from owner-operated small businesses to large multinational corporations. Some coffeehouse chains operate on a franchise business model, with numerous branches across various countries around the world.</p>


        </div>
    )
}

export default EventList