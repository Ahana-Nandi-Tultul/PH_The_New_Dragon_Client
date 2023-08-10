import React from 'react';
import logo from '../../../assets/logo.png'
import Marquee from "react-fast-marquee";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import moment from 'moment/moment';


const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p><small>{moment().format("dddd, MMMM D, YYYY")}</small></p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;