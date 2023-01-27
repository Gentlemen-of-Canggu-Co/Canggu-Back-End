import { useState, useEffect } from "react";
import axios from "axios";
import AddConsumable from "../components/AddConsumable";
import { useParams, Link } from "react-router-dom";
import ImgSlider from "../components/SpotDetailsPage/ImgSlider";
import Overview from "../components/SpotDetailsPage/Overview";
import Ratings from "../components/SpotDetailsPage/Ratings";
import Pictograms from "../components/SpotDetailsPage/Pictograms";
import Menu from "../components/SpotDetailsPage/Menu";
import Accordion from "../components/SpotDetailsPage/Accordion";
import Map from "../components/SpotDetailsPage/Map";
import Description from "../components/SpotDetailsPage/Description";

function SpotDetailsPage() {
const API_URL= "http://localhost:5005"
const {spotId} = useParams()
const [spot, setSpot] = useState({})

useEffect(() => {
  axios.get(`${API_URL}/api/spots/${spotId}`)
    .then(response => setSpot(response.data))
}, [spotId])
// console.log("SPOT EVENTS===>", console.log(Array.isArray(spot.events)))
  return (

<div>

<ImgSlider spot={spot}/>
<Overview spot={spot}/>
<Ratings spot={spot}/>
<Pictograms spot={spot}/>
<Menu spot={spot}/>
<Accordion spot={spot}/>
<Map spot={spot}/>
<Description spot={spot}/>


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


{//Menu Component
}
<div>
{spot.menuImage && <img style={{width: "100vw"}} src={spot.menuImage} alt="menu_image" />}
</div>

{//Dropdown Component
}<button className="accordion">Opening Times & Contact</button>
<div className="panel">
  <p>Opening times: {spot.openingTimes}</p>

<div style={{display: "flex", flexDirection: "column"}}>
<button>Add to Calendar</button>
<button>See more Events</button>

</div>

        </div>
})}


{spot.consumables && spot.consumables.map((singleConsumable) =>{
  return  <div>

        <h1>{singleConsumable.name}</h1>

        <img style={{width: "100vw"}} src={singleConsumable.image} alt="singleEventpicture" />

        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <p>{singleConsumable.tagline}</p>
            <p>{singleConsumable.price}k IDR</p>
            <p>{singleConsumable.rating}</p>

        </div>


        </div>
})}
<AddConsumable ownerId={spotId}/>


</div>

  );
}

export default SpotDetailsPage;
