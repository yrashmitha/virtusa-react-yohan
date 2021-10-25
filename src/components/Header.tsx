import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

interface Props {}

const Header = (props: Props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Contact List</Navbar.Brand>
        <Nav className="me-auto">
          <div className="m-3">
            <Link to="/">Home/Assignment 1</Link>
          </div>

          <div className="m-3">
            <Link to="/as-2">Assignment 2</Link>
          </div>

          {/* <NavLink to="/">
            <Nav.Link>Home</Nav.Link>
          </NavLink>
          <NavLink to="an">
            <Nav.Link>Another</Nav.Link>
          </NavLink> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
