import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    background: #2F4F2A;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .header-title {
        display: flex;
        align-items:center;
        justify-content: flex-left;
        padding-left: 1%;
        @media (min-width: 800px) {
            margin: 0 auto;
            width: 95%;
        }
        h1 {
            font-family: Pacifico;
            color: white;
            font-size: 2.5rem;
            font-weight: 400;
            margin: 0 1rem;

        }
    }


`

const Logo = styled.span`
    height: 3.7rem;
    width: 3.7rem;
    border-radius: 10rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 3.5rem;
        width: 3.5rem;
    }
`

const StyleLink = styled.link`
    color: white;
    `

const Header = () => {
    return (
        <HeaderContainer>
            <div className='header-title'>
                <Logo><img src={require("../images/wmp-logo.png")} /></Logo>
                <h1>Water My Plants</h1>
            </div>
            <div></div>
                <Link style={{ textDecoration: 'none', color: 'white', width: '200px' }} to="/login">Login</Link>
                <Link style={{ textDecoration: 'none', color: 'white', width: '200px'}} to="/signup">Sign Up</Link>
        </HeaderContainer>    
    )
}

export default Header;