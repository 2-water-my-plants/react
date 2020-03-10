import React, { useEffect, useState } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import axios from "axios";
import * as yup from 'yup';
import styled from 'styled-components';
import { axiosWithAuth } from '../authorization/axiosWithAuth.js';
import { useHistory } from "react-router-dom"
const Container = styled.div`
   form {
        @media (min-width: 1000px) {
            width: 500px;
        }
        label {
            display: flex;
            flex-direction: column;
            width: 80%;
            margin: 0 auto;
            font-size: 1.8rem;
            font-weight: 500;
            
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


const Login = ({ setToken }) => {
  const [credentials, setCredentials] = useState({ username: "", password: ""});
  const [ error, setError ] = useState()
  const history = useHistory()
  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('https://water-myplants-2.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        window.localStorage.setItem('token', res.data.token);
        history.push('/plants');
        setToken(res.data.token)
      })
      .catch((err) => {
        console.log("error")
        setError("Invalid user credentials")
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
      <h2>{error && error}</h2>
      <form onSubmit={e => login(e)}>
        <label>Username
        <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={e => handleChange(e)}
          />
        </label>
        <label>Password
        <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={e => handleChange(e)}
          />
        </label>
        <Trans {...slideIn(0)}>
          <button>Log in</button>
        </Trans>
      </form>
    </Container>
  )
}

export default Login;