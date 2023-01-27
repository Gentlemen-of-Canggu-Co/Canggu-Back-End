import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { InstagramEmbed } from 'react-social-media-embed';

function SpotDetailsPage() {

const API_URL= "http://localhost:5005"
const {spotId} = useParams()
console.log("ID", spotId)
const [spot, setSpot] = useState({})

useEffect(() => {
  axios.get(`${API_URL}/api/spots/${spotId}`)
    .then(response => setSpot(response.data))
}, [spotId])

  return (

    //  IMG/Slider Component
<div>
<Link to={`/events/${spot._id}/create`}><button>Add Event</button></Link>

    <div>
    <img src={spot.spotImage} alt="cafe_image"/>
    </div>


    <div>

{// Overview Component
}        
<div style={{display: "flex", justifyContent: "space-between"}}>
<h1>{spot.name}</h1>
            <a href="#">See menu</a>
        </div>

        <div style={{display: "flex", justifyContent: "space-between", borderColor: "black", borderStyle: "solid"}}>
            <p>{spot.tagline}</p>
            <p>Rating: {spot.overallRating}</p>
        </div>

    </div>

{// Ratings Component
}    <div style={{display: "flex", justifyContent: "space-between"}}>

      <div >
        <p>{spot.foodRating}</p>
        <p>Food</p>
      </div>   

    <div>
    <p>{spot.coffeeRating}</p>
        <p>Coffee</p> 
      </div> 
      
    <div>
    <p>{spot.ambienceRating}</p>
        <p>Ambience</p>   
      </div>    

    </div>

{//Pictogram Slider Component
} 
<div>
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
</div>


{//Menu Component
}
<div>
<img style={{width: "100vw"}} src={spot.menuImage} alt="pictogram" />
</div>

{//Dropdown Component
}<button className="accordion">Opening Times & Contact</button>
<div className="panel">
  <p>Opening times: {spot.openingTimes}</p>
</div>




{//Map Component
}

<div
      dangerouslySetInnerHTML={{__html: spot.location}}
    />


{//Description Component
}

<h2>Description</h2>
<p>{spot.description}</p>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CneGaTKgVTx/" width={328} />
</div>


</div>




  );
}

export default SpotDetailsPage;
