import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand href="/">Oren Zion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="/iris">Iris</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Project 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Project 3
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Project 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
