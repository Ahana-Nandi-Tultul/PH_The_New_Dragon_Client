import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaFacebook, FaGithub, FaTwitter, FaInstagram,  } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <div className=''>
                <h4 className=''>Login With</h4>
                <Button variant="outline-primary" className='mb-2'> <FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub/> Login With Github</Button>
            </div>
            <div>
                <h4>Find US On</h4>
                <div className='mb-4'>
                    <ListGroup>
                        <ListGroup.Item><FaFacebook color='#2c03fc'/> facebook</ListGroup.Item>
                        <ListGroup.Item><FaTwitter color='#037bfc'/> Twitter</ListGroup.Item>
                        <ListGroup.Item><FaInstagram color='#fc0328'/> Instagram</ListGroup.Item>
                    </ListGroup>
                </div>
                <QZone></QZone>
            </div>
        </div>
    );
};

export default RightNav;