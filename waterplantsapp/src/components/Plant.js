import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../authorization/axiosWithAuth.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Plant(props) {

    const [plant, setPlant] = useState({});

    useEffect(() => {
        setPlant(props.plant);
    }, [props.plant])

    function unplant() {
        axiosWithAuth()
            .delete(`https://water-myplants-2.herokuapp.com/api/plants/${plant.id}`)
            .then(res => alert("Deleted Plant"))
            .catch(err => alert("Error Deleting Plant"))
            .finally(() => window.location.reload()/*reload page*/)
    }
    

    return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{padding: '20px 30px', width: '200px', marginBottom: '20px', border: '1.5px solid black',borderRadius: '25px', boxShadow: '0px 0px 10px'}}>
            <h3>{plant.nickName}</h3>
            <p style={{fontWeight: 'bold'}}>Species: {plant.species}</p>
            <p style={{fontWeight: 'bold'}}>h20Frequency: {plant.h2oFrequency} times a day</p>
            <img  style={{width:"175px", display: "flex", justifyContent: "center", paddingBottom: "20px"}}src={plant.image}/>
            <button style={{border: 'none', fontSize: '15px', marginRight: '10px'}}onClick={unplant}>Delete Plant</button>
            <Link style={{textDecoration: 'none', color: 'black', marginTop: "20px"}} to={{pathname:"/updateplant", updateProps: {...plant}}}>Update Plant</Link>
        </div>
    </div>
    );
}

export default Plant;
