function Menu(props){


    const {spot} = props

    return(

<div>
    {spot.menuImage && <img style={{width: "100vw"}} src={spot.menuImage} alt="pictogram" />}
</div>

    )
}

export default Menu