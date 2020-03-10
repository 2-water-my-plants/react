import axios from 'axios';

export const axiosWithAuth =() => {
    const token = window.localStorage.getItem('token');

    if(token === "undefined") {
        console.log("NOT LOGGED IN");
    }else{
        console.log("LOGGED IN ", {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        });
    }

    return axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};