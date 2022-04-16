import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./Cities.css";

export const Cities = () => {
  const [cityDetails, setCityDetails] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCityDetails({ ...cityDetails, [name]: value, id: uuidv4() });
    console.log("cityDetails: ", cityDetails);
  };

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:8080/cities", cityDetails)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <>
      <div className="cityDetails">
        <h2>Add New City</h2>
        <div className="addCity">
          <input
            type="text"
            name="city_name"
            placeholder="Enter your City"
            //   value={city}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="country_name"
            placeholder="Enter your Country"
            //   value={country}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="population"
            placeholder="Enter your Country Population"
            //   value={population}
            onChange={handleChange}
          />
          <br />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Submit"
            className="submit"
          />
        </div>
      </div>
    </>
  );
};
