function SpotList(){

    return(

    <div>

        <h1>Spots in Canggu</h1>
        <p>Find your perfect spot, based on what matters to you.</p>

<div>
        <h2>Sort by rating of...</h2>

<div style={{display: "flex", justifyContent: "space-evenly"}}>

<div>
<img style={{width: "30vw"}} src="https://static.vecteezy.com/system/resources/thumbnails/000/582/138/small/icon0-vector-898-01.jpg" alt="picto" />
<p>Drinks</p>
</div>
<div>
<img style={{width: "30vw"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHjYAIBnG27_WmOIfn4kHkqfFzqrMphjTQg&usqp=CAU" alt="picto" />
<p>Food</p>
</div>

</div>


<div style={{display: "flex", justifyContent: "space-evenly"}}>

<div>
    <img style={{width: "30vw"}} src="data:image/png;base64,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" alt="picto" />
<p>Coffee</p>
</div>
  <div>
  <img style={{width: "30vw"}} src="https://cdn-icons-png.flaticon.com/512/898/898440.png" alt="picto" />
  <p>Ambience</p>
  </div>  
</div>

</div>

<div className="card" style={{width: "18rem;", borderStyle: "solid", borderColor: "black", borderWidth: "10px"}}>
  <img className="card-img-top" src="https://dojobali.org/wp-content/uploads/2020/01/koast-web-images-03.jpg" alt="spot_view"/>
  <div className="card-body">
    <h2 className="card-text">Spot Name</h2>
    <div style={{display: "flex", justifyContent:"space-evenly"}}>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    </div>

  </div>
</div>

<div className="card" style={{width: "18rem;"}}>
  <img className="card-img-top" src="https://dojobali.org/wp-content/uploads/2020/01/koast-web-images-03.jpg" alt="spot_view"/>
  <div className="card-body">
    <h2 className="card-text">Spot Name</h2>
    <div style={{display: "flex", justifyContent:"space-evenly"}}>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    </div>

  </div>
</div>

<div className="card" style={{width: "18rem;"}}>
  <img className="card-img-top" src="https://dojobali.org/wp-content/uploads/2020/01/koast-web-images-03.jpg" alt="spot_view"/>
  <div className="card-body">
    <h2 className="card-text">Spot Name</h2>
    <div style={{display: "flex", justifyContent:"space-evenly"}}>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    </div>

  </div>
</div>

<div className="card" style={{width: "18rem;"}}>
  <img className="card-img-top" src="https://dojobali.org/wp-content/uploads/2020/01/koast-web-images-03.jpg" alt="spot_view"/>
  <div className="card-body">
    <h2 className="card-text">Spot Name</h2>
    <div style={{display: "flex", justifyContent:"space-evenly"}}>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    <div>
        <p>44</p>
        <p>Overall</p>
    </div>
    </div>

  </div>
</div>


<h2>Cafes and Restaurants in Canggu</h2>
<p>A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, notably espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages. In continental Europe, cafés serve alcoholic drinks. A coffeehouse may also serve food, such as light snacks, sandwiches, muffins, fruit, or pastries. Coffeehouses range from owner-operated small businesses to large multinational corporations. Some coffeehouse chains operate on a franchise business model, with numerous branches across various countries around the world.</p>


    </div>


    )
}

export default SpotList