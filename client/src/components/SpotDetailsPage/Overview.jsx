function Overview(props){
const {spot} = props

    return(

<div>
     
    <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1>{spot.name}</h1>
        <a href="#">See menu</a>
    </div>

    <div style={{display: "flex", justifyContent: "space-between", borderColor: "black", borderStyle: "solid"}}>
        <p>{spot.tagline}</p>
        <p>Rating: {spot.overallRating}</p>
    </div>

 </div>
    )
}

export default Overview