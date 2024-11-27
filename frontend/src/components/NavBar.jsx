import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand as={Link} to='/'>CRUD API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to= '/dog'>Add Dog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar