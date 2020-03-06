import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../authorization/axiosWithAuth.js";
import Plant from "./Plant.js";
import CreatePlant from "./CreatePlant.js"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function Plants() {

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("https://water-myplants-2.herokuapp.com/api/plants")
        .then(res => setPlants(res.data))
        .catch(err => alert("Error getting plants list! \n" + err));
    }, [])

  return (
      <div>
          <h1 style={{textAlign: 'center'}}>These are some of our plants:</h1>
          <ul>
              {plants.map((plant) => {
                  return (<Plant key={plant.id} plant={plant}></Plant>)
              })}
          </ul>
          <Link to='/newplant'style={{display: 'flex', justifyContent: 'center', color: '#2F4F2A', fontWeight: 'bold'}}>ADD NEW PLANT!</Link>
      </div>
  );
}

export default Plants;