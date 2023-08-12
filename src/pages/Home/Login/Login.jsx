import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);
    const location = useLocation();
    // console.log("Login:", location);
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || "/";
    // console.log(from);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <Container className='mx-auto w-25 mt-4 border p-4 bg-white rounded'>
            <h3 className='text-center'>Please Login!!!</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Form.Text className="text-muted">
            Dont’t Have An Account ? <Link to="/register" 
            className='text-danger text-decoration-none'>Register</Link> 
            </Form.Text>
        </Container>
    );
};

export default Login;