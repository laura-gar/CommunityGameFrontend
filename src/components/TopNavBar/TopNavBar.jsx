import React from 'react'
import {Container, Navbar, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css" 
import './TopNavBar.css';
import { useNavigate } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { useAuth } from '../../hooks/useAuth';

export default function TopNavBar() {
    const auth = useAuth(); 
    const navigateTo = useNavigate();

    const user = auth.user.username; 
        
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

    return(
        <>
        <Navbar variant="dark" id="topNavBar" className='h-25 py-4'>
            <Container>
                <Navbar.Brand className="col-8">TekkenGames</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="d-flex flex-row justify-content-between">
                <Navbar.Text>
                    Signed in as: <span>{user}</span> 
                    <BsPerson></BsPerson>
                </Navbar.Text>
                <Button id="logOutButton" variant="dark" onClick={() => handleSubmit()}>Sign out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        </>
    )

}
    