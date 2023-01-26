function SpotDetailsPage() {
  return (

    //  IMG/Slider Component
<div>

    <div>
    <img src="https://dojobali.org/wp-content/uploads/2020/01/koast-web-images-04.jpg" alt="cafe_image"/>
    </div>


    <div>

{// Overview Component
}        <div style={{display: "flex", justifyContent: "space-between"}}>
            <h1>Headline</h1>
            <a href="#">See menu</a>
        </div>

        <div style={{display: "flex", justifyContent: "space-between", borderColor: "black", borderStyle: "solid"}}>
            <p>This is the Tagline</p>
            <p>Rating: 76</p>
        </div>

    </div>

{// Ratings Component
}    <div style={{display: "flex", justifyContent: "space-between"}}>

      <div >
        <p>42</p>
        <p>Food</p>
      </div>   

    <div>
    <p>71</p>
        <p>Coffee</p> 
      </div> 
      
    <div>
    <p>71</p>
        <p>Ambience</p>   
      </div>    

    </div>

{//Pictogram Slider Component
} 
<div>
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
<img style={{width: "50px"}} src="https://chemicalsinourlife.echa.europa.eu/documents/2934490/2940794/PICTOGRAM.png" alt="pictogram" />
</div>


{//Menu Component
}
<div>
<img style={{width: "100vw"}} src="https://img.freepik.com/premium-vector/digital-restaurant-menu-horizontal-format_23-2148655475.jpg?w=2000" alt="pictogram" />
</div>

{//Dropdown Component
}<button class="accordion">Opening Times & Contact</button>
<div class="panel">
  <p>Opening times <br></br>Monday <br></br>Tuesday <br></br>Wednesday <br></br>Thursday <br></br>Friday</p>
</div>




{//Map Component
}<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15777.577630593447!2d115.1270335!3d-8.653987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd239dbf9282b27%3A0x72807e8552a62db5!2sKoast%20Cafe!5e0!3m2!1sen!2sid!4v1674728731974!5m2!1sen!2sid" title="whatever"></iframe>


{//Description Component
}

<h2>Description</h2>
<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>


</div>



  );
}

export default SpotDetailsPage;
