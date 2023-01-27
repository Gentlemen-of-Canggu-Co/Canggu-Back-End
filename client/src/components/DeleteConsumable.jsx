import {useNavigate} from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";

function DeleteConsumable(props){
 const {spotId} = props;
 const navigate = useNavigate()

 
 const handleSubmit = () => {

    axios.delete(`${API_URL}/api/consumable/${spotId}`)
      .then(() => navigate(`/spots/${spotId}`)
      )
      
  }

return(
    <div>
        <button onClick={handleSubmit}>Delete Event</button>
    </div>
)

}

export default DeleteConsumable;