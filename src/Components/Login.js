import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="link"
        className="nav-login-btn"
        onClick={handleShow}
      >
        <i className="fa fa-user-o" aria-hidden="true"></i>
        <span>Sign in</span>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="account-modal"
        contentClassName="account-modal-content"
      >
        <Modal.Header closeButton className="account-modal-header">
          <div>
            <p className="eyebrow mb-2">Welcome back</p>
            <Modal.Title>Sign in to your account</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p className="account-modal-intro">
            Sign in to make your next find feel like yours.
          </p>
          <Button variant="outline-dark" className="social-signin-btn w-100 mb-3">
            <i className="fa fa-google me-2"></i>Sign In with Google
          </Button>
          <Button variant="outline-dark" className="social-signin-btn w-100 mb-3">
            <i className="fa fa-facebook me-2"></i>Sign In with Facebook
          </Button>
          <div className="account-divider">
            <span>or sign in with email</span>
          </div>
          <Form className="account-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="you@example.com" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="dark" className="btn-premium w-100" type="submit">
              Sign in
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
