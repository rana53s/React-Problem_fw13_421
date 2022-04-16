import { useState } from "react";
import axios from "axios";
import "./Countries.css";
// import {v4 as uuidv4} from "uuid";

export const Countries = () => {
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
    console.log("country: ", country);
  };

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:8080/countries", country)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <>
      <div className="countryDetails">
        <h2>Add New Country</h2>
        <div className="addCountry">
          <input
            type="text"
            placeholder="Enter your Country Name"
            value={country}
            onChange={handleChange}
          />
          <br />
          <input onClick={handleSubmit} type="submit" value="Submit" />
        </div>
      </div>
    </>
  );
};
