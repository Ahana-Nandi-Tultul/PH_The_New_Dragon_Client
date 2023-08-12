import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logout} = useContext(AuthContext);
    // console.log("Navigationbar:", user)
    const handleLogout = event => {
        logout()
        .then(() => {
            <Navigate to ="/"></Navigate>
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (

             <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/">Home</Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link href="#deets">
                            {
                                user && <FaUserCircle style={{fontSize: "40px"}}/>
                            }
                            
                        </Nav.Link>
                        {
                            user ? <Button variant="secondary" onClick={handleLogout}>Logout</Button> :
                            <Link to="/login"><Button variant="secondary">Login</Button></Link> 
                        }
                           
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default NavigationBar;