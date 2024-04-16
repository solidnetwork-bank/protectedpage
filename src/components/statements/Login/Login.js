import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../static/styles/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    STATEMENT_PATH
} from '../../../model/store-const.js';
import {
    API_LOGIN_PATH
} from '../../../investments/action/action-const';


export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function LoginUser(credentials) {

        const user = {
            username: credentials.username,
            password: credentials.password
        };



        axios.post(`${API_LOGIN_PATH}`, { user })
            .then(res => {

                setToken(res.data.data.token)
            })


    }
    const navigate = useNavigate();

    const handleLoginSubmit = async e => {
        e.preventDefault();
        await LoginUser({
            username,
            password
        });



        navigate({ STATEMENT_PATH }); // Redirect to the statement search
    }

    return (
        <div className="login-wrapper">
            <h1>Welcome</h1>
            <form onSubmit={handleLoginSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};