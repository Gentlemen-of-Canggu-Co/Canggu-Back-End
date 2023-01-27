import { useState } from "react";
import axios from "axios";

function AddConsumable(props) {
  const { ownerId } = props;
  const API_URL = "http://localhost:5005";
  const [consumable, setConsumable] = useState({
    name: "",
    tagline: "",
    price: 0,
    rating: 0,
    ownerId: ownerId,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setConsumable((consumable) => ({ ...consumable, [name]: value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/api/consumable`, consumable)
      .then(() => setConsumable({ name: "", tagline: "", price: 0, rating: 0, ownerId: ownerId }))
      .catch((err) => console.log(err));
  };

  return (
    <div className="AddConsumable">
      <h3>Add New Consumable</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={consumable.name}
          onChange={handleChange}
        />

        <label>Tagline:</label>
        <textarea
          type="text"
          name="tagline"
          value={consumable.tagline}
          onChange={handleChange}
        />

        <label>Price:</label>
        <textarea
          type="number"
          name="price"
          value={consumable.price}
          onChange={handleChange}
        />

        <label>Rating:</label>
        <textarea
          type="number"
          name="rating"
          value={consumable.rating}
          onChange={handleChange}
        />

        <button type="submit">Add Consumable</button>
      </form>
    </div>
  );
}

export default AddConsumable;
