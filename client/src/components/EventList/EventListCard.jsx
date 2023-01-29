import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function EventListCard(props){
    const {events, spots} = props
    return(
   <div>

{events.map((event) => {
        return (

          <div key={event._id}>
            {/* <div className="card" style={{ width: "18rem" }}>
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
            </div> */}


<Card sx={{ maxWidth: "100vw" }}>
    <Box sx={{ position: 'relative' }}>

    <CardMedia
        sx={{ height: 220 }}
        image={event.eventImage}
        title="green iguana"
      />

      <Box
        sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.54)',
        color: 'white',
        padding: '10px',
      }}
      >
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
    <div>
      <Typography variant="h5">{event.name}</Typography>
      <Typography variant="body2">{event.startDate} | {event.startTime}</Typography>
    </div>


    <CardActions style={{width: "20vw"}}>
        <Link key={event._id} to={`/events/${event._id}`}><Button variant="contained">See details</Button></Link>    
      </CardActions>

</div>
    </Box>
  </Box>

      

    </Card>






            </div>


         
          
        );
      })}

   </div>
        )
}

export default EventListCard