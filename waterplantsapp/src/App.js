import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import styled from "styled-components";
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
    <Container>
      <Header />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Container>
  );
}

export default App;
