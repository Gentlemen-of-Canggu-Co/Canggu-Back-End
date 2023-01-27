import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AddSpot(){


    const [type, setType] = useState([])
    const [meal, setMeal] = useState([])
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [location, setLocation] = useState("")
    const [openingTimes, setOpeningTimes] = useState("")
    const [menuImage, setMenuImage] = useState("")
    const [spotImage, setSpotImage] = useState("")
    const [priceLevel, setPriceLevel] = useState("")
    const [description, setDescription] = useState("")
    const [overallRating, setOverallRating] = useState()
    const [coffeeRating, setCoffeeRating] = useState()
    const [drinkRating, setDrinkRating] = useState()
    const [foodRating, setFoodRating] = useState()
    const [ambienceRating, setAmbienceRating] = useState()
    const [veganFriendly, setVeganFriendly] = useState(false)
    const [hasPool, setHasPool] = useState(false)
    const [coWorkingFriendly, setCoWorkingFriendly] = useState(false)
    const [dateFriendly, setDateFriendly] = useState(false)
    const [outsideSeating, setOutsideSeating] = useState(false)
    const [wifiSpeed, setWifiSpeed] = useState(false)
    const [hasSockets, setHasSockets] = useState(false)
    const consumables = [{}]
    const events = [{}]

    const navigate = useNavigate()
    const API_URL = "http://localhost:5005";

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newSpot = {type, meal, name, tagline, location, openingTimes, menuImage, spotImage, priceLevel, description, overallRating, coffeeRating, drinkRating, foodRating, ambienceRating, veganFriendly, hasPool, coWorkingFriendly, dateFriendly, outsideSeating, wifiSpeed, hasSockets, events, consumables}
    
        axios.post(`${API_URL}/api/spots`, newSpot)
            .then((response) => {
                navigate(`/spots/${response.data._id}`);
            })
    }


    return(
        <div>

<div>
        <h3>Add new Spot</h3>
        <form onSubmit={handleSubmit}>
            <label>Type of Spot</label>
            <input type="text" name="type" value={type} onChange={(event) => setType(event.target.value)} />
            <br/>
            <label>Type of Meal</label>
            <input type="text" name="meal" value={meal} onChange={(event) => setMeal(event.target.value)} />
            <br/>
            <label>Name of Spot</label>
            <input type="text" name="name" value={name} onChange={(event)=> setName(event.target.value)} />
            <br/>
            <label>Tagline</label>
            <input type="text" name="tagline" value={tagline} onChange={(event)=> setTagline(event.target.value)} />
            <br/>
            <label>Maps Location</label>
            <input type="text" name="location" value={location} onChange={(event)=> setLocation(event.target.value)} />
            <br/>
            <label>Opening Times</label>
            <input type="text" name="openingTimes" value={openingTimes} onChange={(event)=> setOpeningTimes(event.target.value)} />
            <br/>
            <label>Menu Image</label>
            <input type="text" name="menuImage" value={menuImage} onChange={(event)=> setMenuImage(event.target.value)} />
            <br/>
            <label>Spot Images</label>
            <input type="text" name="spotImages" value={spotImage} onChange={(event) => setSpotImage(event.target.value)} />
            <br/>
            <label>priceLevel</label>
            <input type="text" name="priceLevel" value={priceLevel} onChange={(event)=> setPriceLevel(event.target.value)} />
            <br/>
            <label>description</label>
            <input type="text" name="description" value={description} onChange={(event)=> setDescription(event.target.value)} />
            <br/>
            <label>Overall Ratign</label>
            <input type="number" name="overallRating" value={overallRating} onChange={(event)=> setOverallRating(Number(event.target.value))} />
            <br/>
            <label>Coffee Rating</label>
            <input type="number" name="coffeeRating" value={coffeeRating} onChange={(event)=> setCoffeeRating(Number(event.target.value))} />
            <br/>
            <label>Drink Rating</label>
            <input type="number" name="drinkRating" value={drinkRating} onChange={(event)=> setDrinkRating(Number(event.target.value))} />
            <br/>
            <label>Food Rating</label>
            <input type="number" name="foodRating" value={foodRating} onChange={(event)=> setFoodRating(Number(event.target.value))} />
            <br/>
            <label>Ambience Rating</label>
            <input type="number" name="ambienceRating" value={ambienceRating} onChange={(event)=> setAmbienceRating(Number(event.target.value))} />
            <br/>
            <label>Is it vegan friendly?</label>
            <input type="checkbox" name="veganFriendly" value={veganFriendly} onChange={(event)=> setVeganFriendly(event.target.value)} />
            <br/>
            <label>Does it have a pool?</label>
            <input type="checkbox" name="hasPool" value={hasPool} onChange={(event)=> setHasPool(event.target.value)} />
            <br/>
            <label>Is it Coworking friendly?</label>
            <input type="checkbox" name="coWorkingFriendly" value={coWorkingFriendly} onChange={(event)=> setCoWorkingFriendly(event.target.value)} />
            <br/>
            <label>Is it suited for Dates?</label>
            <input type="checkbox" name="dateFriendly" value={dateFriendly} onChange={(event) => setDateFriendly(event.target.value)} />
            <br/>
            <label>Does it have outside Seating?</label>
            <input type="checkbox" name="outsideSeating" value={outsideSeating} onChange={(event)=> setOutsideSeating(event.target.value)} />
            <br/>
            <label>How fast is the Wifi?</label>
            <input type="number" name="wifiSpeed" value={wifiSpeed} onChange={(event)=> setWifiSpeed(Number(event.target.value))} />
            <br/>
            <label>Are sockets available?</label>
            <input type="checkbox" name="hasSockets" value={hasSockets} onChange={(event)=> setHasSockets(event.target.value)} />
            <br/>
            
            <button type="submit">Add new Spot</button>
        </form>
      </div>

        </div>
    )
}


export default AddSpot