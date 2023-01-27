function Accordion(props){

    const {spot} = props

    return(

        <div>
            <button className="accordion">Opening Times & Contact</button>
            <div className="panel">
                <p>Opening times: {spot.openingTimes}</p>
            </div>
        </div>

    )
}

export default Accordion