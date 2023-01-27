function Map(props){

    const {spot} = props

    return(

    <div
      dangerouslySetInnerHTML={{__html: spot.location}}
    />

    )
}

export default Map