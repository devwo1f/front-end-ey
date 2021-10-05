import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Button, Form, Col, FloatingLabel } from "react-bootstrap";
import logo from "../Assets/ey-logo.png";
import "../css/register.css";
import Navbarcommon from "./Navbar";

// const initialState = {
//   firstname: "",
//   lastname: "",
//   email: "",
//   password: "",
//   confirmpassword: "",
// };

// const passVerificationError = {
//   isLengthy: false,
//   hasUpper: false,
//   hasLower: false,
//   hasSpclChar: false,
//   hasNumber: false,
//   confirmPassword: false,
// };

function Register() {
  // const [newUser, setNewUser] = useState(initialState);
  // const [passwordError, setPasswordError] = useState(passVerificationError);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {}, [newUser]);

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;

  //   setNewUser({ ...newUser, [name]: value });

  //   if (name === "confirmpassword") {
  //     setPasswordError({
  //       ...passwordError,
  //       confirmPassword: newUser.password === value,
  //     });
  //   }

  //   if (name === "password") {
  //     const isLengthy = value.length > 8;
  //     const hasUpper = /[A-Z]/.test(value);
  //     const hasLower = /[a-z]/.test(value);
  //     const hasNumber = /[0-9]/.test(value);
  //     const hasSpclChar = /[@,!,#,%,&]/.test(value);

  //     setPasswordError({
  //       ...passwordError,
  //       isLengthy,
  //       hasLower,
  //       hasNumber,
  //       hasSpclChar,
  //       hasUpper,
  //     });
  //   }
  // };
  // console.log(newUser);

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <Navbarcommon />
      <Container className="register-form">
        <Form
          style={{ display: "grid", justifyContent: "center" }}
          onSubmit={registerUser}
        >
          <img className="logo" src={logo} alt="ey-logo" />
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                name="firstname"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                value={firstname}
                required
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastname}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </Form.Group>
          <Col md>
            <FloatingLabel label="Select your department">
              <Form.Select
                aria-label="Select your department"
                className="department-select-register"
              >
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </Form.Group>
          {/* <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={handleOnChange}
              value={nonfirmpassword}
              required
            />
          </Form.Group> */}
          {/* <Form.Text>
            {!passwordError.confirmPassword && (
              <div className="text-danger mb-3">Password doesn't match!</div>
            )}
          </Form.Text> */}

          {/* <ul className="mb-4">
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
          </ul> */}
          <Button variant="primary" type="submit" value="register">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default Register;
