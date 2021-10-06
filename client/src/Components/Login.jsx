import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import logo from "../Assets/ey-logo.png";
import "../css/login.css";
import Navbarcommon from "./Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/dashboard";
    } else {
      alert("Please check your username and password");
    }
  }
  return (
    <div>
      <Navbarcommon />
      <Container className="login-form">
        <Form
          style={{ display: "grid", justifyContent: "center" }}
          onSubmit={loginUser}
        >
          <img className="logo" src={logo} alt="ey-logo" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" value="login">
            Login
          </Button>
        </Form>
        <Row>
          <Col className="justify-content-center register-button-inline">
            New User? <a href="/register">Register Now!</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
