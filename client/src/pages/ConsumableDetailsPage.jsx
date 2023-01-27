import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import DeleteConsumable from "../components/DeleteConsumable";

function ConsumableDetailsPage() {
  const API_URL = "http://localhost:5005";
  const { consumableId } = useParams();
  const [consumable, setConsumable] = useState({});
  const [spot, setSpot] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/api/consumable/${consumableId}`)
      .then((response) => setConsumable(response.data));
  }, [consumableId]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/spots/${consumable.owner}`)
      .then((response) => setSpot(response.data));
  }, [consumable.owner]);

  return (
    <div>
      <h1>
        {consumable.name} from {spot.name}
      </h1>

      {consumable.image && (
        <img
          style={{ width: "100vw" }}
          src={consumable.image}
          alt="consumablepicture"
        />
      )}

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <p>{consumable.rating}</p>
        <p>{consumable.price}k IDR</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to={`/spots/${spot._id}`}>
          <button>Back to spot</button>
        </Link>
        <DeleteConsumable consumableId={consumableId} spot={spot} />
      </div>
    </div>
  );
}

export default ConsumableDetailsPage;
