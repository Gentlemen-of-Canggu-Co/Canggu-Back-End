import { Link } from "react-router-dom"

function ImgSlider(props){

const {spot} = props

    return(

<div>
    <Link to={`/spots/${spot._id}/edit`}><button>Edit Spot</button></Link>
    <Link to={`/events/${spot._id}/create`}><button>Add Event</button></Link>

    <div>
        <img style={{width: "100vw"}} src={spot.spotImage} alt="cafe_image"/>
    </div>

</div>

    )
}

export default ImgSlider