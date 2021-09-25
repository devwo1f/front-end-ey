import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logosmall from "../Assets/ey-small.png";
import { Avatar } from "@mui/material";
import { Button } from "react-bootstrap";
import "../css/navbarsearchpage.css";

function NavbarSearchPage() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="/login">
              <Button variant="outline-light">Upload</Button>{" "}
            </Nav.Link>
            <Nav.Link href="">
              <Avatar className="avatar_mui">A</Avatar>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSearchPage;