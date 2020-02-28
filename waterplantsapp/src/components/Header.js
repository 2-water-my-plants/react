import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background: #2F4F2A;
    height: 6rem;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    div {
        display: flex;
        align-items:center;
        justify-content: flex-end;
        @media (min-width: 800px) {
            margin: 0 auto;
            width: 800px;
            
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

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo><img src={require("../images/wmp-logo.png")} /></Logo>
                <h1>Water My Plants</h1>
            </div>
        </HeaderContainer>    
    )
}

export default Header;