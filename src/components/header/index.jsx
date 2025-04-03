import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/ais_logo.svg';
import "./header.css";

const Header = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  const onTabChange = (eventKey) => {
    console.log(eventKey);
    setSelectedTab(eventKey);
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        className='custom-navbar'
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
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
            <Nav className='ms-auto' activeKey={selectedTab} onSelect={onTabChange}>
              <Nav.Link as={Link} to='/' eventKey="/">Home</Nav.Link>
              <Nav.Link as={Link} to='/Events' eventKey="/Events">Events</Nav.Link>
              <Nav.Link as={Link} to='/Resources' eventKey="/Resources">Resources</Nav.Link>
              <Nav.Link as={Link} to='/About' eventKey="/About">About</Nav.Link>
              <Nav.Link as={Link} to='/Contact' eventKey="/Contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;