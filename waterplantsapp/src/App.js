import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Home from "./pages/Home"
import PrivateRoute from "./authorization/PrivateRoute.js"
import Plants from "./components/Plants.js"
import UpdatePlant from './components/UpdatePlant';
import CreatePlant from "./components/CreatePlant"


const Container = styled.div`
    background-image: url(${require("./images/mobile-bg.jpg")});
    background-size: cover;
    background-position: center;
    height: 100%;

    @media (min-width: 800px) {
      background: none;
    }
`
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
      try {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
      } catch (error) {
          console.log(error);
          return initialValue;
      }
  });

  const setValue = value => {
      try {
          const valueToStore =
              value instanceof Function ? value(storedValue) : value;
          setStoredValue(valueToStore);
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
          console.log(error);
      }
  };
  return [storedValue, setValue];
}

function App() {

  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path='/plants' component={Plants} />
      <PrivateRoute path='/newplant' component={CreatePlant} />
      <PrivateRoute path='/updateplant' component={UpdatePlant} />
    </Router>
  );
}

export default App;
