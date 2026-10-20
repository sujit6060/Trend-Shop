import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="link"
        className="nav-register-btn"
        onClick={handleShow}
      >
        Create account
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
            <p className="eyebrow mb-2">Make it yours</p>
            <Modal.Title>Create your account</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p className="account-modal-intro">
            Save your favorites and keep every order in one place.
          </p>
          <Form className="account-form">
            <Button variant="outline-dark" className="social-signin-btn w-100 mb-2" type="button">
              <i className="fa fa-google me-2"></i> Sign Up with Google
            </Button>
            <Button variant="outline-dark" className="social-signin-btn w-100 mb-2" type="button">
              <i className="fa fa-facebook me-2"></i> Sign Up with Facebook
            </Button>
            <div className="account-divider">
              <span>or create an account with email</span>
            </div>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="At least 8 characters"
                minLength={8}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTerms">
              <Form.Check
                type="checkbox"
                label="I agree to the terms and conditions"
                required
              />
            </Form.Group>
            <Button variant="dark" className="btn-premium w-100" type="submit">
              Create account
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signup;
