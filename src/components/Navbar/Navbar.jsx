import { Link } from "react-router-dom";
import "./Navbar.css";



export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <button className="home">Home</button>
        </Link>
        <Link to="/add-city">
          <button className="addCity">Add New City</button>
        </Link>
        <Link to="/add-country">
          <button className="addCountry">Add New Countryy</button>
        </Link>
      </div>
    </>
  );
};
