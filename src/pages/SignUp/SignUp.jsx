import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Style from './SignUp.module.css';
import axios from 'axios';

const SignUp = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState();
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    });

    const handle = (e) => {
        const {name, value} = e.target;
        setFormData((old) => ({
            ...old,
            [name]: value,
        }));
        console.log(formData);

    };
    let signup = (e) => {
        e.preventDefault();
        onSignUp(formData);
        axios.post('http://localhost:3001/posts', {
        email,
        password,
    })
    .then((data) => {
        console.log(data);
        setEmail(data)
        setPassword(data)
        navigate('/login')
    })
    }
    
    
    return (
        <div className={`logIn ${Style.m}`}>
            <div className="container">
                <h2 className={`${Style.title}`}>Sign Up</h2>
                <form onSubmit={signup} className={` ${Style.form}`}>
                    <div className="mb-3 container">
                        <label for='fullName' className={`form-label`}>Full Name</label>
                        <input value={formData.fullName} onChange={handle} className={`form-control w-75`} type="text" name="fullName" id="fullName" required />
                    </div>
                    <div className="mb-3 container">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={formData.email} name='email' onChange={handle} type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3 container">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input value={formData.password} name='password' onChange={handle} type="password" className="form-control w-75" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3 container">
                        <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
                        <input value={formData.confirmPassword} name='confirmPassword' onChange={handle} type="password" className="form-control w-75" id="exampleInputPassword2" required />
                    </div>

                    <button  type="submit" onClick={signup} className={`container ${Style.btn} w-25`}>Confirm</button>
                    <p>Already have an account?
                        <Link className={`${Style.link}`} to={"/login"}>Login </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;