import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css"; // Import CSS file for styling

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    // Here, you can implement logic for sending reset password instructions
    console.log("Submit");
    navigate("/reset-password");
  };

  return (
    <div className="forget-password-container">
      <Container>
        <Form className="forget-password-form">
          <h2 className="forget-password-title">Forgot Your Password?</h2>
          <p className="forget-password-description">
            Enter your registered email address and we'll send you instructions on how to reset your password.
          </p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="forget-password-input"
            />
            <Form.Text className="text-muted forget-password-text">
              We'll send you a verification code to reset your password.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={submitHandler} className="forget-password-button">
            Continue
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ForgetPassword;
