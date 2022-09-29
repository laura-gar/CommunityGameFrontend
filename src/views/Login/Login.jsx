import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

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
                navigateTo(from, { replace: true });
            },
            (error) => {
                console.log("Error", error);
            });
    }


    return (
        <div className='card w-75 mx-auto'>
            <div className="row">
                <div className="col-3">
                    <img src="" alt="" />
                </div>
                <div className="col-9 p-2">
                    <h2>Login</h2>
                    <form className='row' onSubmit={handleSubmit}>
                        <div className="col-12">
                            <label htmlFor="emailInput" className='form-label'>Username</label>
                            <input type="text" name="username" className="form-control" id="emailInput" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="passInput" className='form-label'>Password</label>
                            <input type="password" name="password" className="form-control" id="passInput" />
                        </div>
                        <div className="col-12">
                            <input type="submit" className='btn btn-primary' value="Login" />
                            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
