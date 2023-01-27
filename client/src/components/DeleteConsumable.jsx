import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";

function DeleteConsumable(props) {
  const { consumableId, spot } = props;
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .delete(`${API_URL}/api/consumable/${consumableId}`)
      .then(() => navigate(`/spots/${spot._id}`));
  };

  return (
    <div>
      <button onClick={handleSubmit}>Delete Consumable</button>
    </div>
  );
}

export default DeleteConsumable;
