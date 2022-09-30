import React from 'react'
import './SignUp.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../../components/Header/Header';

export default function SignUp() {

   return (
        <body id="signInScreen" className='m-0 vh-100 h-100 d-flex flex-md-column justify-content-center align-items-center'>
            <Header></Header>
            <div id="signInContainer" className='col-auto h-75 w-50 d-flex justify-content-space-around '>
                <div id="formContainer" className='h-100 w-100 p-2'>
                    <h1 className='p-3'>Sign Up</h1>
                    <form id="form" className='p-4'>
                        <div class="form-group">
                            <label for="emailInput">Email address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="emailInput" 
                                name="email"
                                aria-describedby="emailHelp" 
                                placeholder="Enter email"    
                                />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="usernameInput">Username</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="usernameInput" 
                                name="username"
                                placeholder="Password"   
                                />
                        </div>
                        <div class="form-group">
                            <label for="passwordInput">Password</label>
                            <input 
                                type="password" 
                                class="form-control" 
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
                        class="btn btn-primary"
                        >Sign Up
                        </button>
                        <p>Already member? </p>
                    </div>
                </div>
                <div id="imageContainer" className='h-100 w-50 '>
                    IMAGE
                </div>
            </div>
        </body>
  )
}