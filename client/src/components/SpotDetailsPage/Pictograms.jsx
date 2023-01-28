import PowerIcon from '@mui/icons-material/Power';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import DeckIcon from '@mui/icons-material/Deck';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PoolIcon from '@mui/icons-material/Pool';import WorkOutlineIcon from '@mui/icons-material/WorkOutline';




function Pictograms(props){
    const {spot} = props

    return(
<div>
{spot.outsideSeating && <DeckIcon fontSize='large'/>}
{spot.hasSockets && <PowerIcon fontSize='large'/>}
{spot.veganFriendly && <LocalFloristIcon fontSize='large'/>}
{spot.dateFriendly && <VolunteerActivismIcon fontSize='large'/>}
{spot.hasPool && <PoolIcon fontSize='large'/>}
{spot.coWorkingFriendly && <WorkOutlineIcon fontSize='large'/>}
</div>

   )
}

export default Pictograms
