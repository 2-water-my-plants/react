import React, { useEffect, useState } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import axios from "axios";
import * as yup from 'yup';
import styled from 'styled-components';
import { axiosWithAuth } from '../authorization/axiosWithAuth.js';

const Container = styled.div`

    form {
        @media (min-width: 1000px) {
            width: 500px;
        }
        margin: 0 auto;
        align-items: center;
        display: flex;
        flex-direction: column;
        border: 1.5px solid black;
        padding-top: 25px;
        border-radius: 25px;
        box-shadow: 0px 0px 10px;
        margin-right: 30px;
        
            
            input {
                margin-bottom: 3rem;
                font-size: 1.8rem;
                padding: 0.5rem 0.2rem;
                
            }
        }
        button {
            display: flex;
            margin: 0 auto 4rem auto;
            width: 80%;
            border: none;
            padding: 1rem 0;
            border-radius: 0.5rem;
            justify-content: center;
            font-size: 1.8rem;
            border: 0.1rem solid rgba(43, 48, 58, 0.9);
            background: white;
            color: rgba(43, 48, 58, 0.9);
            cursor: pointer;
            transition: background 300ms ease-out;
            &:hover {
                color: white;
                background: rgba(43, 48, 58, 0.9);
                transition: background 300ms ease-in;
            }
            @media (min-width: 800px) {
                width: 30rem;
            }
            @media (min-width: 1000px) {
                width: 18rem;
            }
        }
    }
`
const Trans = ReactCSSTransitionGroup;

const slideIn = () => {
    return {
        transitionName: `slideIn`,
        transitionEnterTimeout: 0,
        transitionAppear: true,
        transitionAppearTimeout: 0,
        transitionLeave: true,
        transitionLeaveTimeout: 500
    }
}


const Login = (props) => {
    const [credentials, setCredentials] = useState({});
   
     const login = e => {
       e.preventDefault();
       axiosWithAuth().post('https://water-myplants-2.herokuapp.com/api/login', credentials)
         .then(res => {
             console.log("Login successful ", res.data.payload);
           localStorage.setItem('token', res.data.payload);
           props.history.push('/');
         })
     }
   
     const handleChange = e => {
         setCredentials({
           ...credentials,
           [e.target.name]: e.target.value,
         })
     }
   
       return (
        <Container>
         <div>
           <form onSubmit={login}>
             <h3>Username:</h3>
             <input
               type="text"
               name="username"
               value={credentials.username}
               onChange={handleChange}
               placeholder="username" 
             />
             <br/>
             <h3>Password:</h3>
             <input
               type="password"
               name="password"
               value={credentials.password}
               onChange={handleChange}
               placeholder="password" 
             />
             <button>Log in</button>
           </form>
         </div>
         </Container>
       )
   }
   
   export default Login;