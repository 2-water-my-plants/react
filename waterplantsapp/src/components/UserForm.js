import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from 'formik';

import axios from "axios";
import * as yup from 'yup';
import styled from 'styled-components';


const testInfo = {
    name: "thomas",
    email: "thomas@domain.com",
    password: "Bestpassword%123",
}

const Container = styled.div`

    form {
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
        }
    }
`


const UserForm = (props) => {

    const [error, setError] = useState()
    const [users, setUsers] = useState([testInfo])

    console.log(props.values)

    useEffect(() => {
        if (!props.isValid) {
            const validationError = props.errors[Object.keys(props.errors)[0]];
            validationError && setError(validationError)
        }

        if (props.status) {
            if (users.find((user) => user.email === props.status.email)) {
                setError(`Email ${props.status.email} is already taken`)
            } else {
                setUsers([...users, props.status])
                setError(undefined)
            }
        }
    }, [props.isSubmitting, props.status])

    return (
        <Container>
            {error && <h2>{error}</h2>}

            <Form>
                <label>
                    First Name
                    <Field type="text" name="firstName" />
                </label>
                <label>
                    Last Name
                    <Field type="text" name="lastName" />
                </label>
                <label>
                    Phone Number
                    <Field 
                    type="tel" 
                    name="phoneNumber"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="xxx-xxx-xxxx"
                    />
                </label>
                <label>
                    Username
                    <Field type="text" name="username" />
                </label>
                <label>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Sign In</button>
            </Form>
        </Container>
    )
}

export default withFormik({
    mapPropsToValues: ({ name, email, phoneNumber, username, password }) => {
        return {
            name: name || "",
            email: email || "",
            phoneNumber: phoneNumber || "",
            username: username || "",
            password: password || ""
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string().required("Please enter your name"),
        email: yup.string().required("Please enter your email").email("Please enter an appropriate email"),
        phoneNumber: yup.string().required("Please enter your phone number").min(12).max(12),
        username: yup.string().required("Please enter your username"),
        password: yup.string().required("Please enter a password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Password needs a minimum eight characters, at least one letter, one number and one special character " })
    }),
    handleSubmit: (values, { setStatus, resetForm }) => {
        // axios
        //     .post("", values)
        //     .then(response => {
        //         setStatus(response.data)
        //         resetForm()
        //     })
        //     .catch(err => console.log(err.response))
        setStatus(values)
    }
})(UserForm);