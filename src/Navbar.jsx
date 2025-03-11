import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./main.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#gallery" className="nav-link">Gallery</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
