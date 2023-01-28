import PowerIcon from '@mui/icons-material/Power';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import DeckIcon from '@mui/icons-material/Deck';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PoolIcon from '@mui/icons-material/Pool';import WorkOutlineIcon from '@mui/icons-material/WorkOutline';




function Pictograms(props){
    const {spot} = props

    return(
<div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between"}}>


{spot.outsideSeating && 
<div style={{width: "30vw"}}>
<DeckIcon fontSize='large'/>
<p>Outside Seating</p>
</div>}


{spot.hasSockets && 
<div style={{width: "30vw"}}>
<PowerIcon fontSize='large'/>
<p>Offers sockets</p>
</div>}

{spot.veganFriendly && 
<div style={{width: "30vw"}}>
<LocalFloristIcon fontSize='large'/>
<p>Vegan options</p>
</div>}

{spot.dateFriendly && 
<div style={{width: "30vw"}}>
<VolunteerActivismIcon fontSize='large'/>
<p>Good for dates</p>
</div>}

{spot.hasPool && 
<div style={{width: "30vw"}}>
<PoolIcon fontSize='large'/>
<p>Has a pool</p>
</div>}

{spot.coWorkingFriendly && 
<div style={{width: "30vw"}}>
<WorkOutlineIcon fontSize='large'/>
<p>Coworking spot</p>
</div>}


</div>

   )
}

export default Pictograms
