import React from 'react';
import './App.css';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";

const Container = styled.div`
    background-image: url(${require("./images/mobile-bg.jpg")});
    background-size: cover;
    background-position: center;
    height: 100%;

    @media (min-width: 800px) {
      background: none;
    }
`
function App() {
  return (
    <Router>
      <Header />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
