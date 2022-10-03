import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserFormHeader from '../../components/UserFormHeader/UserFormHeader';
import { useAuth } from '../../hooks/useAuth';
import superMarioImg from '../Login/supermario.jpg';
import './SignUp.css';

export default function SignUp() {
    const auth = useAuth();
    const navigateTo = useNavigate();


    const welcomeMessage = () => {
        Swal.fire({
            title: 'Welcome to TekkenGames!',
            confirmButtonText: 'Go to Log In',
            text: 'Lets go to Login',
            showCloseButton: true
        })
            .then(function (result) {
                if (result.value) {
                    navigateTo("/login");
                }
            })
    }

    const errorMessage = (message = "Network error. Try again") => {
        Swal.fire({
            title: 'Fail',
            confirmButtonText: 'Ok',
            text: message,
            showCloseButton: true
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const form = document.getElementById('form');
        let data = new FormData(form);
        const email = data.get('email');
        const username = data.get('username');
        const password = data.get('password');
        console.log("email", email);
        auth.register(
            username,
            email,
            password,
            () => {
                welcomeMessage();
            },
            (error) => {
                errorMessage(error.message);
            });
    }
    if (auth.user) {
        return (<Navigate to='/games' />);
    }
    return (
        <div className="col vh-100 d-flex flex-column justify-content-center align-items-center">
            <UserFormHeader className="w-75" />
            <div className='card w-75'>
                <div className="row">
                    <div className="col ms-4 pt-5 pb-5">
                        <h1 className='mb-4 text-white'>Sign Up</h1>
                        <form id="form" className='row g-3' onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="emailInput" className='form-label'>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    name="email"
                                />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="usernameInput" className='form-label'>Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="usernameInput"
                                    name="username"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordInput" className='form-label'>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    name="password"
                                />
                            </div>
                            <div className="col-auto">
                                <button
                                    id="gButton"
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ height: '50px', width: '90px' }}>
                                    Sign Up
                                </button>
                            </div>
                            <div className="col-auto d-flex align-items-center">
                                <p className="m-0">Already member? <Link to="/login">Log in</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <img className='user-form-image' src={superMarioImg} alt="Mario Bros Game" />
                    </div>
                </div>
            </div>
        </div>
    )
}