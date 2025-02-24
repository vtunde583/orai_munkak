import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const regiok = () => {
    const [regions, setRegions] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5173")
        .then((response) => response.json())
        .then((data) => setRegions(data))
        .catch((error) => console.error("Hiba az adatok lekérésekor:", error));
    }, []);
  
    return (
      <div>
        <h2>Régiók</h2>
        <table border="1">
          <thead>
            <tr>
              <th>RID</th>
              <th>Régió Név</th>
              <th>Régió Típusa</th>
            </tr>
          </thead>
          <tbody>
            {regions.slice(0, 8).map((kozutak) => (
              <tr key={kozutak.rid}>
                <td>{kozutak.rid}</td>
                <td>{kozutak.regionev}</td>
                <td>{kozutak.regiotipus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


export default Regiok;