import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { axiosWithAuth } from '../authorization/axiosWithAuth.js';

const UpdatePlant = (props) => {
    console.log(props.location);
 const [plant, setPlant] = useState({name: "", species: "", h20frequency: ""});

useEffect(() => {
    setPlant(props.location.updateProps);
}, [props.location.updateProps])

  const update = e => {

    e.preventDefault();
    
    console.log("Updating plant with ID " + plant.id + " with data ", JSON.stringify(plant));

    axiosWithAuth()//can't get this to not error with 404 
        .put("https://water-myplants-2.herokuapp.com/api/plants:" + plant.id, JSON.stringify(plant))
        .then(res => { alert("Sucessfully Updated Friend"); props.history.push('/') })
        .catch(err => console.log(err));
  }

  const handleChange = e => {
      setPlant({
        ...plant,
        [e.target.name]: e.target.value,
      })
  }

    return (
      <div>
        <form onSubmit={update}>
            <label>Name: </label>
          <input
            type="text"
            name="plant"
            value={plant.name}
            onChange={handleChange}
          />
          <label>Species: </label>
          <input
            type="text"
            name="species"
            value={plant.species}
            onChange={handleChange}
          />
          <label>H20Frequency: </label>
          <input
            type="number"
            name="h20frequency"
            value={plant.h2ofrequency}
            onChange={handleChange}
          />
          <button>Update plant</button>
        </form>
      </div>
    )
}

export default UpdatePlant;