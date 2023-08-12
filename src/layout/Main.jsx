import React from 'react'
import {Outlet} from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
  return (
    <div>
       <Header></Header>
       <Container>
       <NavigationBar></NavigationBar>
                <Row>
                    <Col sm={3}>
                      <LeftNav></LeftNav>
                    </Col>
                    <Col sm={6}>
                      <Outlet></Outlet>
                    </Col>
                    <Col sm={3}>
                      <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
       <Footer></Footer>
    </div>
  )
}

export default Main
