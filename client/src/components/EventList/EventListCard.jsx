import { Link } from "react-router-dom";

function EventListCard(props){
    const {events, spots} = props
    return(
   <div>

{events.map((event) => {
        return (

          <div key={event._id}>
            <div className="card" style={{ width: "18rem" }}>
              <Link to={`/events/${event._id}`}><img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_YG7-dxa-Y6LweEAKHqXDgt_ZkPx1XZ5Yg&usqp=CAU"
                alt="event title"
              /></Link>
              <div className="card-body">
              <Link to={`/events/${event._id}`}><p className="card-text">{event.name}</p></Link>
                <p className="card-text">{event.date}</p>
                {spots.map((spot) => {
                  return <Link key={spot._id} to={`/spots/${spot._id}`}>{spot.name}</Link>;
                })}
              </div>
            </div>
            </div>
          
        );
      })}

   </div>
        )
}

export default EventListCard