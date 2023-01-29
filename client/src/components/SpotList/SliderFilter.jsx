import Slider from '@mui/material/Slider';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SliderFilter(props){

const {setFilteredSpots, spots} = props   
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


        const filteredList = spots.filter((spot) => spot.coffeeRating > coffeeFilter && spot.ambienceRating > ambienceFilter && spot.overallRating > overallFilter && spot.foodRating > foodFilter)

setFilteredSpots(filteredList)
    }  

    return(





<div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography>Filter results</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div>
<form onSubmit={handleSubmit}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
        <Slider
style={{width: "60vw"}}
  aria-label="Overall"
  defaultValue={1}
  sx={{
    width: 300,
    color: 'success.main',
  }}
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
  sx={{
    width: 300,
    color: 'success.main',
  }}
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
  sx={{
    width: 300,
    color: 'success.main',
  }}
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
  name="AbienceRating"
  valueLabelDisplay="auto"
  step={1}
  sx={{
    width: 300,
    color: 'success.main',
  }}
  value={ambienceFilter}
  onChange={(event) => setAmbienceFilter(event.target.value)}
  marks={marks}
  
  min={1}
  max={100}
/>
<p>Ambience</p>
</div>
<Button type="submit" variant="contained">Show results</Button>
</form>
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>








        
    )
}

export default SliderFilter