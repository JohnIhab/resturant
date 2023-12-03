import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Style from './Login.module.css';
import axios from 'axios';

const Login = ({ onLogin }) => {
    let navigate = useNavigate()
    const [loginData, setLoginData] = useState({
      email: '',
      password: '',
    });

    const handle = (e) => {
        const { name, value } = e.target;
        setLoginData((old) => ({
            ...old,
            [name]: value,
        }));
        console.log(loginData);
    };

    let loginn = async (e) => {
        e.preventDefault();
        onLogin(loginData);

        

        try {
            // Send a POST request to the server endpoint
            await axios.post('http://localhost:3001/posts', loginData);
            
            
            navigate('/home')
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An error occurred during sign-up');
        }
    }

            return (
                <div className={`logIn ${Style.m}`}>
                    <div className="container">
                        <h2 className={`${Style.title}`}>Log in to your account</h2>
                        <form onSubmit={loginn} className={`${Style.form}`}>
                            <div className="mb-3 container">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input value={loginData.email} name='email' onChange={handle} type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3 container">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input name='password' value={loginData.password} onChange={handle} type="password" className="form-control w-75" id="exampleInputPassword1" required />
                            </div>
                            <div className={`mb-3 form-check container ${Style.check}`}>
                                <input type="checkbox" className="form-check-input " id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" onSubmit={loginn} className={`container ${Style.btn} w-25`}>Login</button>
                            <p>Don't have an account?
                                <Link to={"/SignUp"} className={`${Style.link}`}>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            );
        };

    export default Login;