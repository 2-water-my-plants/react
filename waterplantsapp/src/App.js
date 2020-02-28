import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import styled from "styled-components";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";

const Container = styled.div`
  width: 100%;
`
function App() {
  return (
    <div>
      <Header />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
}

export default App;
