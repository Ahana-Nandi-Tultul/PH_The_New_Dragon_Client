import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';

const Home = () => {
    return (
        <div>
           
            <Container>
                <Row>
                    <Col sm={3}><LeftNav></LeftNav></Col>
                    <Col sm={6}>This is main</Col>
                    <Col sm={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default Home;