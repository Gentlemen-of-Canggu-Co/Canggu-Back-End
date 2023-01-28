import {useState, useEffect} from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import SliderFilter from "../components/SpotList/SliderFilter";


function SpotList(){

    const [spots, setSpots] = useState([])
    const [filteredSpots, setFilteredSpots] = useState([])
    const API_URL= "http://localhost:5005"
    
    // useEffect(() => {
    //     axios.get(`${API_URL}/api/spots`)
    //         .then(response => setSpots(response.data))
    // }, [])

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
        <h2>Sort by rating of...</h2>

<SliderFilter spots={spots} setSpots={setSpots} filteredSpots={filteredSpots} setFilteredSpots={setFilteredSpots} />

</div>



    {filteredSpots.map((spot) => {
            return <Link key={spot._id} to={`/spots/${spot._id}`}><div className="card" style={{width: "18rem", borderStyle: "solid", borderColor: "black", borderWidth: "10px"}}>
  <img className="card-img-top" src={spot.spotImage} alt="spot_view"/>
  <div className="card-body">
    <h2 className="card-text">{spot.name}</h2>
    <div style={{display: "flex", justifyContent:"space-evenly"}}>
    <div>
        <p>{spot.overallRating}</p>
        <p>Overall</p>
    </div>
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

  </div>
</div>
</Link>
        })
    }

    <h2>SEO: About Cafes and Restaurants in Canggu</h2>
    <p>A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, notably espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages. In continental Europe, cafés serve alcoholic drinks. A coffeehouse may also serve food, such as light snacks, sandwiches, muffins, fruit, or pastries. Coffeehouses range from owner-operated small businesses to large multinational corporations. Some coffeehouse chains operate on a franchise business model, with numerous branches across various countries around the world.</p>

    </div>


    )
}

export default SpotList