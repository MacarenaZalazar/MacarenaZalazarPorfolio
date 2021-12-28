import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { NavDiv } from './styles';

const NavBar = () => {
    return (
        <NavDiv id='nav'>
          <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Macarena Zalazar Porfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#technologies">Technologies</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <Nav>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>   
        </NavDiv>
    );
};

export default NavBar;
