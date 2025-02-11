// create a new component called Navbar
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from '../../assets/ais_logo.svg';
import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        className='custom-navbar'
      >
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src={Logo}
              width='40'
              height='40'
              className='d-inline-block align-top'
              alt='AIS Logo'
            />
            <span className='gradient-text'> Association of Indian Students</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/Events'>Events</Nav.Link>
              <Nav.Link href='/Resources'>Resources</Nav.Link>
              <Nav.Link href='/About'>About</Nav.Link>
              <Nav.Link href='/Contact'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
