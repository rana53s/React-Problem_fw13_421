import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => fetchData(), []);

  async function fetchData() {
    await axios.get("http://localhost:8080/cities").then((res) => {
      setData([...res.data]);
    });
  }

  const deleteFromList = async (id) => {
    await axios.delete(`http://localhost:4500/cart/${id}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="homePage">
        <h1>Home</h1>
        <br />
        <table style={{ border: "1.5px solid black" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid gray" }}>S.No</th>
              <th style={{ border: "1px solid gray" }}>Country</th>
              <th style={{ border: "1px solid gray" }}>City</th>
              <th style={{ border: "1px solid gray" }}>Population</th>
              <th style={{ border: "1px solid gray" }}>Update</th>
              <th style={{ border: "1px solid gray" }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.id}>
                <td style={{ border: "1px solid gray" }}>{e.id}.</td>
                <td style={{ border: "1px solid gray" }}>{e.country_name}</td>
                <td style={{ border: "1px solid gray" }}>{e.city_name}</td>
                <td style={{ border: "1px solid gray" }}>{e.population}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={deleteFromList}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
