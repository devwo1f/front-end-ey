import { Container } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import logo from "../Assets/ey-logo.png";
import "../css/login.css";
import Navbarcommon from "./Navbar";

function Login() {
  return (
    <div>
      <Navbarcommon />
      <Container className="login-form">
        <Form style={{ display: "grid", justifyContent: "center" }}>
          <img className="logo" src={logo} alt="ey-logo" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox cb" label="Keep me signed in" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default Login;
