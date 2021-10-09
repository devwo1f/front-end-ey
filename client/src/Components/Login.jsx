import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import logo from "../Assets/ey-logo.png";
import "../css/login.css";
import Navbarcommon from "./Navbar";
import { useHistory } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  let history = useHistory();

  async function loginUser() {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    const response = await fetch(
      `http://eylogin11.azurewebsites.net/login?usr_nm=${username}&pas=${password}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    if (data === "user found") {
      setAuth(true);
      history.push("/searchpage");
    } else {
      alert("Wrong Credentials!");
    }
  }

  return (
    <div>
      <Navbarcommon />
      <Container className="login-form">
        <Form style={{ display: "grid", justifyContent: "center" }}>
          <img className="logo" src={logo} alt="ey-logo" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            onClick={loginUser}
            value="login"
          >
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
