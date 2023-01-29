import { Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function EventCard(props){
   
    const {spot} = props
    return(
        <div>
        <h2>Events @ {spot.name}</h2>

{spot.events && spot.events.map((singleEvent) =>{
  return                  <div key={singleEvent._id}>

  <Card sx={{ maxWidth: "100vw" }}>
    <Box sx={{ position: 'relative' }}>

    <CardMedia
        sx={{ height: 220 }}
        image={singleEvent.eventImage}
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
      <Typography variant="h5">{singleEvent.name}</Typography>
      <Typography variant="body2">{singleEvent.startDate} | {singleEvent.startTime}</Typography>
    </div>


    <CardActions style={{width: "20vw"}}>
        <Link key={singleEvent._id} to={`/events/${singleEvent._id}`}><Button variant="contained">See details</Button></Link>    
      </CardActions>

</div>
    </Box>
  </Box>

      

    </Card>






            </div>
  
  
  {/* <div>

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

        </div> */}
})}
        </div>
    )
}

export default EventCard