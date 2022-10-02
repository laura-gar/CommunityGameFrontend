import React from 'react'
import './SignUp.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Swal  from 'sweetalert2'; 
import { useAuth } from '../../hooks/useAuth';

export default function SignUp() {
    const auth = useAuth(); 
    const navigateTo = useNavigate(); 
    let from = window.location.state?.from?.pathname || "/login";


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

    const errorMessage = (message="Network error. Try again") => {
        Swal.fire({
            title: 'Fail',
            confirmButtonText: 'Ok',
            text: message,
            showCloseButton: true
        })
    }

    function handleSubmit() {
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

   return (
        <div id="signInScreen" className='m-0 vh-100 h-100 d-flex flex-md-column justify-content-center align-items-center'>
            <Header></Header>
            <div id="signInContainer" className='col-auto h-75 w-50 d-flex justify-content-space-around '>
                <div id="formContainer" className='h-100 w-100 p-2'>
                    <h1 className='p-3'>Sign Up</h1>
                    <form id="form" className='p-4' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="emailInput">Email address</label>
                            <input 
                                type="email" 
                                className ="form-control" 
                                id="emailInput" 
                                name="email"
                                aria-describedby="emailHelp" 
                                placeholder="Enter email"    
                                />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="usernameInput">Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="usernameInput" 
                                name="username"
                                placeholder="Password"   
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordInput">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="passwordInput" 
                                name="password"
                                placeholder="Password"
                                />
                        </div>
                    </form>

                    <div id='links' className='p-4'>
                        <button 
                            id="gButton" 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={() => handleSubmit()}
                            >Sign Up
                        </button>
                        <p>Already member? <Link to="/login">Sign up</Link></p>
                    </div>
                </div>
                <div id="imageContainer" className='h-100 w-50 '>
                    IMAGE
                </div>
            </div>
        </div>
  )
}