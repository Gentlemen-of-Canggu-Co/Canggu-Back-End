// import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <h1>Project Name</h1>

      <img style={{width: "100vw"}} src="https://www.flokq.com/blog/wp-content/uploads/2021/11/Cafe-di-Bali.jpg" alt="slidercontent" />

      <p style={{fontSize:"2rem"}}><i>"The Canggu gastronomy is a jungle. Let me be your friendly guide."</i></p>


      <div className="mb-3">
  <label for="role" className="form-label">What kind of Spot you need?</label>
  <select name="role" id="role" className="form-select" aria-label="Default select example">
  <option value="Cafe">Cafe</option>
  <option value="Restaurant">Restaurant</option>
  <option value="Bar">Bar</option>
</select>
  <button type="submit" classNameName="btn btn-primary">Find your sweetspot!</button>
</div>

<div className="mb-3">
  <label for="role" className="form-label">What kind of meal you want?</label>
  <select name="role" id="role" className="form-select" aria-label="Default select example">
  <option value="Breakfast">Breakfast</option>
  <option value="Lunch">Lunch</option>
  <option value="Dinner">Dinner</option>
  <option value="Dinner">Late Night Snack</option>
  <option value="Dinner">Drinks</option>
</select>
  <button type="submit" classNameName="btn btn-primary">Find your real meal!</button>
</div>

<h2>#noFilter</h2>
<p>F*ck Filters, show them all!</p>
<button>Browse all Spots</button>

<h2>About Project Name</h2>
<p><p>A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, notably espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages. In continental Europe, cafés serve alcoholic drinks. A coffeehouse may also serve food, such as light snacks, sandwiches, muffins, fruit, or pastries. Coffeehouses range from owner-operated small businesses to large multinational corporations. Some coffeehouse chains operate on a franchise business model, with numerous branches across various countries around the world.</p>
</p>

    </div>
  );
}

export default HomePage;
