import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    background: #2F4F2A;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
            display: none;
            @media (min-width: 800px) {
                display: block;
            }
        }
    }
    .header-navs {
        display: flex;
        align-items: center;
        width: 30rem;
        justify-content: space-evenly;
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
const Header = ({ token, removeTokenFromLocal }) => {
    return (
        <HeaderContainer>
            <div className='header-title'>
                <Logo to='/'><img src={require("../images/wmp-logo.png")}/></Logo>
                <h1>Water My Plants</h1>
            </div>
            {
                token
                ?
                <div className="header-navs">
                    <Link style={styles.linkStyle} to="/plants">Plants</Link>
                    <Link onClick={() => removeTokenFromLocal()}style={styles.linkStyle} to="/login">Logout</Link>
                </div>
                :
                undefined
            }
        </HeaderContainer>    
    )
}

const styles = {
    linkStyle: {
        textDecoration: 'none',
        color: 'white',
        width: 200
    }
}

export default Header;