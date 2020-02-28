import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import UserForm from "../components/UserForm";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 800px) {
        width: 800px;
        margin: 0 auto;
    }
    h1 {
        width: 80%;
        margin: 5rem auto 0 auto;
        font-weight: 500;
        font-size: 3.5rem;
    }
    p {
        width: 80%;
        margin: 0 auto 3rem auto;
        a {
            color: #FF9500;
        }
        a:visited {
            color: #FF9500;
        }
    }
`
const Trans = ReactCSSTransitionGroup;

const fadeIn = (n, timeoutLength) => {
    return {
        transitionName: `fadeIn${n}`,
        transitionEnterTimeout: 0,
        transitionAppear: true,
        transitionAppearTimeout: timeoutLength,
        transitionLeave: true,
        transitionLeaveTimeout: 500
    }
}


const Login = () => {
    return (
        <Container>
            <Trans {...fadeIn(1, 1000)} >
                <h1>Login in to your Account</h1>
            </Trans>
            <Trans {...fadeIn(2, 1500)} >
            <p>Don't have an account? <Link to="/signup">Create account</Link></p>
            </Trans>
            <UserForm />
        </Container>
    )
}

export default Login;