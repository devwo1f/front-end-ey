import { Container, Row } from "react-bootstrap";
import { Button, Form, Col } from "react-bootstrap";
import logo from "../Assets/ey-logo.png";
import "../css/register.css";
import Navbarcommon from "./Navbar";

function Register() {
  return (
    <div>
      <Navbarcommon />
      <Container className="register-form">
        <Form style={{ display: "grid", justifyContent: "center" }}>
          <img className="logo" src={logo} alt="ey-logo" />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Control type="email" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMiddleName">
              <Form.Control type="email" placeholder="Last Name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default Register;
