import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "./Login.css";

const Login = () => {
  const loginState = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginState;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const loginHandler = () => {
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }
    const user = { email, password };
    dispatch(loginUser(user));
  };

  const handleForgotPassword = () => {
    navigate("/forget-password");
  };

  return (
    <div className="login-container">
      <Container>
        {loading && <Loader />}
        {error && <Error error="Invalid email or password" />}
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={loginHandler}>
            Login
          </Button>
          <Button variant="link" onClick={handleForgotPassword} className="forgot-password-link">
            Forgot Password?
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
