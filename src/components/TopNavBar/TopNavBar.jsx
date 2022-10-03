import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import AppLogo from '../Logos/AppLogo/AppLogo';
import './TopNavBar.css';
import UserLogo from "../Logos/UserLogo";

export default function TopNavBar() {
    const auth = useAuth();
    const navigateTo = useNavigate();


    function handleSubmit() {
        auth.logout(
            () => {
                navigateTo("/login");
            },
            (error) => {
                console.log("Error", error);
            }
        )
    }
    if (!auth.user) {
        return null;
    }
    const user = auth.user.username;
    return (
        <>
            <Navbar variant="dark" id="topNavBar" className='pt-4 pb-2 mb-5 border-3 border-bottom'>
                <Container>
                    <Navbar.Brand className="d-flex justify-content-center"><AppLogo classVariant='app-logo--middle' /></Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">

                        <UserLogo username={user} />
                        <div className="me-4">{user}</div>
                        <Button id="logOutButton" variant="dark" onClick={() => handleSubmit()}>Sign out</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )

}
