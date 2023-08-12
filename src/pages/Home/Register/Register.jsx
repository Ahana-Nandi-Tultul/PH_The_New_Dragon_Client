import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <Container className='mx-auto w-25 mt-4 border p-4 bg-white rounded'>
        <h3 className='text-center'>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Enter photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <Form.Text className="text-muted">
            Already Have An Account ? <Link to="/login"
             className='text-danger text-decoration-none'>Login</Link>
        </Form.Text>
    </Container>
    );
};

export default Register;