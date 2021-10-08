import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import logo from "../Assets/ey-logo.png";
import "../css/login.css";
import Navbarcommon from "./Navbar";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const history = useHistory();

  // var myHeaders = new Headers();
  // myHeaders.append("Access-Control-Allow-Origin", "*");
  // myHeaders.append(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PUT, DELETE, OPTIONS"
  // );
  // myHeaders.append("Access-Control-Allow-Headers", "Authorization, Lang");

  function loginUser() {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      `http://eylogin11.azurewebsites.net/login?usr_nm=${username}&pas=${password}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        if (result === "user found") {
          history.push("/searchpage");
          console.log(result);
        } else {
          console.log(result);
        }
      })
      .catch((error) => console.log("error", error));
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
