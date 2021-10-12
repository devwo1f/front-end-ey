import React from "react";
import { Navbar, Container, Nav, Button, FormControl } from "react-bootstrap";
import logosmall from "../Assets/ey-small.png";
import "../css/navbarcommonacross.css";
import { useHistory } from "react-router";

function NavbarCommonAcross() {
  let history = useHistory();
  function handleLogout() {
    history.push("/login");
    sessionStorage.removeItem("username");
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navigation-common"
    >
      <Container>
        <Navbar.Brand>
          <img
            src={logosmall}
            width="30"
            height="35"
            className="d-inline-block align-top"
            alt="ey-small-logo"
          />{" "}
          <span className="brand-name">
            <span className="bold-brand-name">WOLVES</span> SEARCH
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="justify-content-end">
            <Button href="/search" className="navey" variant="outline-warning">
              Search
            </Button>
            <Button href="/upload" className="navey" variant="outline-light">
              Upload
            </Button>{" "}
            <Button
              onClick={handleLogout}
              className="navey"
              variant="outline-primary"
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCommonAcross;
