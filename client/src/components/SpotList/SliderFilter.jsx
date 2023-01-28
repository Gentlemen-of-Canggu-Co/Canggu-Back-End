import Slider from '@mui/material/Slider';
import { useState } from 'react';
function SliderFilter(props){

const {filteredSpots, setFilteredSpots, spots, setSpots} = props   
const [coffeeFilter, setCoffeeFilter] = useState(null)
const [overallFilter, setOverallFilter] = useState(null)
const [ambienceFilter, setAmbienceFilter] = useState(null)
const [foodFilter, setFoodFilter] = useState(null)

    const marks = [
        {
          value: 0,
          label: "0"
        },
        {
          value: 30,
          label: "30"
        },
        {
          value: 60,
          label: "60"
        },
        {
          value: 90,
          label: "90"
        }
      ];

      const handleSubmit = (e) => {
        e.preventDefault()
        setFilteredSpots(spots)
        console.log("FILTERED SPOTS===>", filteredSpots)
        console.log("SPOTS===>", spots)
        const filteredList = filteredSpots.filter((spot) => spot.coffeeRating > coffeeFilter && spot.ambienceRating > ambienceFilter && spot.overallRating > overallFilter && spot.foodRating > foodFilter)
        console.log("FILTERED LIST===>", filteredList)
        setFilteredSpots(filteredList)
    }  

    return(

        <div>
<form onSubmit={handleSubmit}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
        <Slider
style={{width: "60vw"}}
  aria-label="Overall"
  defaultValue={1}
//   getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  value={overallFilter}
  onChange={(event) => setOverallFilter(event.target.value)}
  step={1}
  marks={marks}
  min={1}
  max={100}
/>

<p>Overall</p>
        </div>

        <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>

<Slider
style={{width: "60vw"}}
  aria-label="Food"
  defaultValue={1}
//   getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={1}
  value={foodFilter}
  onChange={(event) => setFoodFilter(event.target.value)}
  marks={marks}
  min={1}
  max={100}
/>
<p>Food</p>
</div>

<div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>

<Slider
style={{width: "60vw"}}
  aria-label="Coffee"
  defaultValue={1}
//   getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={1}
  value={coffeeFilter}
  onChange={(event) => setCoffeeFilter(event.target.value)}
  marks={marks}
  min={1}
  max={100}
/>
<p>Coffee</p>
</div>

<div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>

<Slider
style={{width: "60vw"}}
  aria-label="Ambience"
  defaultValue={1}
//   getAriaValueText={valuetext}
name="AbienceRating"
  valueLabelDisplay="auto"
  step={1}
  value={ambienceFilter}
  onChange={(event) => setAmbienceFilter(event.target.value)}
  marks={marks}
  min={1}
  max={100}
/>
<p>Ambience</p>
</div>
<button type="submit">Filter that shit</button>
</form>
        </div>
    )
}

export default SliderFilter