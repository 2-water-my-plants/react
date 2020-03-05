import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import axios from "axios";
import * as yup from 'yup';
import styled from 'styled-components';

const Container = styled.div`

    form {
        @media (min-width: 1000px) {
            width: 500px;
        }
        label {
            display: flex;
            flex-direction: column;
            width: 80%;
            margin: 0 auto;
            font-size: 1.8rem;
            font-weight: 500;
            
            input {
                margin-bottom: 3rem;
                font-size: 1.8rem;
                padding: 0.5rem 0.2rem;
            }
        }
        button {
            display: flex;
            margin: 0 auto 4rem auto;
            width: 80%;
            border: none;
            padding: 1rem 0;
            border-radius: 0.5rem;
            justify-content: center;
            font-size: 1.8rem;
            border: 0.1rem solid rgba(43, 48, 58, 0.9);
            background: white;
            color: rgba(43, 48, 58, 0.9);
            cursor: pointer;
            transition: background 300ms ease-out;
            &:hover {
                color: white;
                background: rgba(43, 48, 58, 0.9);
                transition: background 300ms ease-in;
            }
            @media (min-width: 800px) {
                width: 30rem;
            }
            @media (min-width: 1000px) {
                width: 18rem;
            }
        }
    }
`
const Trans = ReactCSSTransitionGroup;

const slideIn = () => {
    return {
        transitionName: `slideIn`,
        transitionEnterTimeout: 0,
        transitionAppear: true,
        transitionAppearTimeout: 0,
        transitionLeave: true,
        transitionLeaveTimeout: 500
    }
}


const LoginForm = (props) => {

    const [error, setError] = useState()
    const [users, setUsers] = useState()
    useEffect(() => {
        if (!props.isValid) {
            const validationError = props.errors[Object.keys(props.errors)[0]];
            validationError && setError(validationError)
        }

        if (props.status) {
            if (props.status.errno) {

            } else {
                props.setUserData(props.status)
                setUsers(props.status)
                setError(undefined)
            }

        }
    }, [props.isSubmitting, props.status])

    return (
        <Container>
            {error && <h2>{error}</h2>}

            <Form>
                <label>
                    Username
                    <Field type="text" name="username" />
                </label>
                <label>
                    Password
                    <Field type="password" name="password" />
                </label>
                <Trans {...slideIn(0)}>
                    <button type="submit">Log in</button>
                    <p>Forgot your username/password?</p>
                </Trans>
            </Form>
        </Container>
    )
    
}

export default withFormik({
    mapPropsToValues: ({ username, password, }) => {
        return {
            username: username || "",
            password: password || ""
        }
    },
    validationSchema: yup.object().shape({
        username: yup.string().required("Please enter your username"),
        password: yup.string().required("Please enter a password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Password needs a minimum eight characters, at least one letter, one number and one special character " })
    }),
    handleSubmit: (values, { setStatus, resetForm }) => {
        axios
            .post("https://water-myplants-2.herokuapp.com/api/auth/login", values)
            .then(response => {
                console.log(response.data)
                setStatus(response.data)
                resetForm()
            })
            .catch(err => {
                setStatus(err.response.data)
                console.log(err.response)
            })
    }
})(LoginForm);