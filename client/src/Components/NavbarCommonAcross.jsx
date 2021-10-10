import { Navbar, Container, Nav, Button, FormControl } from "react-bootstrap";
import logosmall from "../Assets/ey-small.png";
import { Avatar } from "@mui/material";
import "../css/navbarcommonacross.css";

function NavbarCommonAcross() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navigation-common"
    >
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
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 navbar-search-box"
              aria-label="Search"
            />
            <Button className="navbar-search-button" variant="outline-warning">
              Search
            </Button>
            <Nav.Link href="">
              <Avatar className="avatar_mui">A</Avatar>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCommonAcross;
