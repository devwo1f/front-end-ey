import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Button, Form, Col, FloatingLabel } from "react-bootstrap";
import logo from "../Assets/ey-logo.png";
import "../css/register.css";
import Navbarcommon from "./Navbar";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");

  function registerUser() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://eylogin11.azurewebsites.net/register?usr_nm=${username}&pas=${password}&loc=${location}&dep=${department}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <Navbarcommon />
      <Container className="register-form">
        <Form style={{ display: "grid", justifyContent: "center" }}>
          <img className="logo" src={logo} alt="ey-logo" />

          <Form.Group className="mb-3">
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
          </Form.Group>
          <Col md>
            <FloatingLabel label="Select your department">
              <Form.Select
                aria-label="Select your department"
                className="department-select-register"
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="Engineering">Engineering</option>
                <option value="Public Relations">Public Relations</option>
                <option value="Finance">Finance</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Col md>
            <FloatingLabel label="Select office location">
              <Form.Select
                aria-label="Select office location"
                className="department-select-register"
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Form.Group className="mb-3 new">
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={registerUser}
            type="button"
            value="register"
          >
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
