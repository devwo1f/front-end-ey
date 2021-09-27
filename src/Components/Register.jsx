import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Button, Form, Col, FloatingLabel } from "react-bootstrap";
import logo from "../Assets/ey-logo.png";
import "../css/register.css";
import Navbarcommon from "./Navbar";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const passVerificationError = {
  isLengthy: false,
  hasUpper: false,
  hasLower: false,
  hasSpclChar: false,
  hasNumber: false,
  confirmPassword: false,
};

function Register() {
  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerificationError);

  useEffect(() => {}, [newUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });

    if (name === "confirmpassword") {
      setPasswordError({
        ...passwordError,
        confirmPassword: newUser.password === value,
      });
    }

    if (name === "password") {
      const isLengthy = value.length > 8;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpclChar = /[@,!,#,%,&]/.test(value);

      setPasswordError({
        ...passwordError,
        isLengthy,
        hasLower,
        hasNumber,
        hasSpclChar,
        hasUpper,
      });
    }
  };
  console.log(newUser);
  return (
    <div>
      <Navbarcommon />
      <Container className="register-form">
        <Form style={{ display: "grid", justifyContent: "center" }}>
          <img className="logo" src={logo} alt="ey-logo" />
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                name="firstname"
                onChange={handleOnChange}
                placeholder="First Name"
                value={newUser.firstname}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Last Name"
                onChange={handleOnChange}
                value={newUser.lastname}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleOnChange}
              value={newUser.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Col md>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Works with selects"
            >
              <Form.Select aria-label="Select your department">
                <option>Department</option>
                <option value="1">Engineering</option>
                <option value="2">Public Relations</option>
                <option value="3">Finance</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleOnChange}
              value={newUser.password}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={handleOnChange}
              value={newUser.confirmpassword}
            />
          </Form.Group>
          <Form.Text>
            {!passwordError.confirmPassword && (
              <div className="text-danger mb-3">Password doesn't match!</div>
            )}
          </Form.Text>

          <ul className="mb-4">
            <li
              className={
                passwordError.isLengthy
                  ? "text-success validation-text"
                  : "text-danger validation-text"
              }
            >
              Min 8 characters
            </li>
            <li
              className={
                passwordError.hasUpper
                  ? "text-success validation-text"
                  : "text-danger validation-text"
              }
            >
              At least One upper case
            </li>
            <li
              className={
                passwordError.hasLower
                  ? "text-success validation-text"
                  : "text-danger validation-text"
              }
            >
              At least one lower case
            </li>
            <li
              className={
                passwordError.hasNumber
                  ? "text-success validation-text"
                  : "text-danger validation-text"
              }
            >
              At least one number
            </li>
            <li
              className={
                passwordError.hasSpclChar
                  ? "text-success validation-text"
                  : "text-danger validation-text"
              }
            >
              At least one special character
            </li>
          </ul>
          <Button
            variant="primary"
            type="submit"
            disabled={Object.values(passwordError).includes(false)}
          >
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default Register;
