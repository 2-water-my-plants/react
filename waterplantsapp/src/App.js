import React, { useState, useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Home from "./pages/Home"
import PrivateRoute from "./authorization/PrivateRoute.js"
import Plants from "./components/Plants.js"
import UpdatePlant from './components/UpdatePlant';
import CreatePlant from "./components/CreatePlant"

function App() {
  let history = useHistory()
  const [ token, setToken ] = useState(undefined)
  useEffect(() => {
    const localToken = window.localStorage.getItem("token")
    console.log(localToken)
    if (localToken !== "undefined") {
      setToken(localToken)
      history.push("/plants")
    }
  }, [])

  const removeTokenFromLocal = () => {
    setToken(undefined)
    window.localStorage.setItem("token", undefined)
  }
  return (
    <Router>
      <Header token={token} removeTokenFromLocal={removeTokenFromLocal}/>
      <Route exact path="/" component={Home}/>
      <Route path="/login" render={() => <Login setToken={setToken} />} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path='/plants' component={Plants} />
      <PrivateRoute path='/newplant' component={CreatePlant} />
      <PrivateRoute path='/updateplant' component={UpdatePlant} />
    </Router>
  )
}

export default App;
