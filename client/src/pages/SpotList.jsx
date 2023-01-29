import {useState, useEffect} from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import SliderFilter from "../components/SpotList/SliderFilter";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




function SpotList(){

    const [spots, setSpots] = useState([])
    const [filteredSpots, setFilteredSpots] = useState([])
    const API_URL= "http://localhost:5005"

    useEffect(() => {
        axios.get(`${API_URL}/api/spots`)
            .then((response) => {
                setSpots(response.data)
                setFilteredSpots(response.data)
            })
    }, [])

    return(

    <div>
<h1>Spots in Canggu</h1>
        <p>Find your perfect spot, based on what matters to you.</p>

        <div>


<SliderFilter spots={spots} setFilteredSpots={setFilteredSpots} />

</div> 



    {filteredSpots.map((spot) => {
            return <Card sx={{ maxWidth: "100vw" }}>
            <Box sx={{ position: 'relative' }}>

      <CardMedia
        sx={{ height: 220 }}
        image={spot.spotImage}
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
      <Typography variant="h5">{spot.name}</Typography>
      <Typography variant="body2"><i>{spot.tagline}</i></Typography>
    </div>


    <p style={{fontSize: "2rem", alignContent:"center", width: "30vw",border: "solid", borderRadius: "50%"}}>        
{spot.overallRating}</p>
    {/* <p>Overall</p> */}

</div>
    </Box>
  </Box>

      <CardContent>


        <Typography variant="body2" color="text.secondary">   
<div style={{display: "flex"}}>

<div style={{display: "flex", width:"100vw"}}>

    <div style={{display: "flex", justifyContent:"space-evenly", width: "70vw"}}>

        <div>
        <p>{spot.coffeeRating}</p>
        <p>Coffee</p>
        </div>

        <div>
        <p>{spot.foodRating}</p>
        <p>Food</p>
        </div>

        <div>
        <p>{spot.ambienceRating}</p>
        <p>Ambience</p>
        </div>
    </div>
    <CardActions style={{width: "20vw"}}>
        <Link key={spot._id} to={`/spots/${spot._id}`}><Button variant="contained">See details</Button></Link>    
      </CardActions>
      </div>

</div>
    </Typography>
      </CardContent>

    </Card>
        })
    }

    <h2>SEO: About Cafes and Restaurants in Canggu</h2>
    <p>A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, notably espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages. In continental Europe, cafés serve alcoholic drinks. A coffeehouse may also serve food, such as light snacks, sandwiches, muffins, fruit, or pastries. Coffeehouses range from owner-operated small businesses to large multinational corporations. Some coffeehouse chains operate on a franchise business model, with numerous branches across various countries around the world.</p>

    </div>


    )
}

export default SpotList