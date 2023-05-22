import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const OldNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>BARLAU</Navbar.Brand>
        </LinkContainer>

        <Nav className="me-auto">
          <LinkContainer to="/scans">
            <Nav.Link>Мои сканы</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/settings">
            <Nav.Link>Настроики</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/profile">
            <Nav.Link>Профиль</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default OldNav;
