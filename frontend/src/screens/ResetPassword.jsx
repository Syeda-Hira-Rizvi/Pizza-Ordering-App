import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css"; // Import CSS file for styling

const ResetPassword = () => {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    // Here, you can implement logic to verify the OTP and reset the password
    console.log("Submit");
    // Navigate to the next step of resetting the password
    navigate("/new-password");
  };

  return (
    <div className="reset-password-container">
      <Container>
        <Form className="reset-password-form">
          <h2 className="reset-password-title">Verification Code</h2>
          <p className="reset-password-description">
            Check the verification code we have sent you on email.
          </p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="number"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              placeholder="Enter verification code"
              className="reset-password-input"
            />
            <Form.Text className="text-muted reset-password-text">
              If you haven't received the code, please check your spam folder.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={submitHandler} className="reset-password-button">
            Continue
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ResetPassword;
