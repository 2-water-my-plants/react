import React, { useState } from 'react';
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
  const [ userData, setUserData ] = useLocalStorage("userData", undefined);
  console.log(userData)

  return (
    <Router>
      <Header />
      <Route path="/login" render={props => <Login  userData={userData} setUserData={setUserData} />} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
