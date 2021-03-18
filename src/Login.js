import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from './logo.png'
import './Login.css';
import { auth } from './firebase';
import {useState} from 'react';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            history.push('/');
        })
        .catch((e) => alert(e.message)); 
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
        })
        .catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="Amazon"/>
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button type="submit" onClick={login}>Sign In</button>
                </form>
                <p>By signing in, you agree to StriXcart's Terms and Conditions.</p>
                <button onClick={register} className="login_registerButton">Create StriXcart Account</button>
            </div>
        </div>
    )
}

export default Login
