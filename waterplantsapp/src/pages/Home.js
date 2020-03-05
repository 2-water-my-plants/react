import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', textAlign: "center", marginTop: '200px'}}>
            <h1>Ready to keep your plants healthy?</h1>
            <Link style={{textDecoration: 'none', border: '1px solid #2F4F2A', padding: '3px 5px', width: '60px', textAlign: "center", margin: '0 auto', color: '#2F4F2A'}} to='/login'>Login</Link>
        </div>
    )
}

export default Home;