import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logosmall from "../Assets/ey-small.png";

function Navbarcommon() {
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
          <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcommon;
