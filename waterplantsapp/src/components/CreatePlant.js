import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { axiosWithAuth } from '../authorization/axiosWithAuth.js';

const CreatePlant = (props) => {
 const [plant, setPlant] = useState({name: "", species: "", h20frequency: ""});

  const create = e => {
    e.preventDefault();
    axiosWithAuth()
        .post("https://water-myplants-2.herokuapp.com/api/plants", plant)
        .then(res => props.history.push('/'))
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
        <form onSubmit={create}>
            <label>Name: </label>
          <input
            type="text"
            name="name"
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
          <label>H20frequency: </label>
          <input
            type="number"
            name="h20frequency"
            value={plant.h20frequency}
            onChange={handleChange}
          />
          <button>Create Plant</button>
        </form>
      </div>
    )
}

export default CreatePlant;