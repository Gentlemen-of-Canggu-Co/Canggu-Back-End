import "./Navbar.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  // const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/events">
        <button>Events</button>
      </Link>

      <Link to="/spots">
        <button>Spots</button>
      </Link>


    </nav>
  );
}

export default Navbar;
