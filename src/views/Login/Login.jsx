import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserFormHeader from '../../components/UserFormHeader/UserFormHeader';
import { useAuth } from '../../hooks/useAuth';
import './Login.css';
import superMarioImg from './supermario.jpg';

function Login(props) {
    const auth = useAuth();
    const navigateTo = useNavigate();
    let from = window.location.state?.from?.pathname || "/games";

    function handleSubmit(e) {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        const username = data.get('username');
        const password = data.get('password');
        auth.login(
            username,
            password,
            () => {
                Swal.fire({
                    title: 'Success!',
                    text: "Redirecting to Games page...",
                    icon: 'success',
                    background: 'var(--bs-body-bg)',
                    color: 'var(--bs-body-color)',
                    showConfirmButton: false,
                    timer: 1700
                });
                navigateTo(from, { replace: true });
            },
            (error) => {
                let message = error.message;
                if (!message) {
                    message = "A network error has ocurred, try again in a few minutes";
                }
                Swal.fire({
                    title: 'Invalid credentials!',
                    text: message,
                    icon: 'warning',
                    background: 'var(--bs-body-bg)',
                    color: 'var(--bs-body-color)',
                    confirmButtonText: 'Close'
                });
            });
    }
    if (auth.user) {
        return (<Navigate to='/games' />);
    }
    return (
        <div className="col vh-100 d-flex flex-column justify-content-center align-items-center">
            <UserFormHeader />
            <div className='card w-75'>
                <div className="row">
                    <div className="col-4">
                        <img className='user-form-image' src={superMarioImg} alt="Mario Bros Game" />
                    </div>
                    <div className="col pt-5 pb-5 pe-4">
                        <h1 className='mb-5 text-white'>Login</h1>
                        <form className='row g-3 w-100' onSubmit={handleSubmit}>
                            <div className="col-12 mb-3">
                                <label htmlFor="emailInput" className='form-label'>Username</label>
                                <input type="text" name="username" className="form-control" id="emailInput" />
                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="passInput" className='form-label'>Password</label>
                                <input type="password" name="password" className="form-control" id="passInput" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className='btn btn-primary' style={{ height: '50px', width: '90px' }}>Login</button>
                            </div>
                            <div className="col-auto d-flex align-items-center">
                                <p className='m-0'>Don't have an account? <Link to="/signup">Sign up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
