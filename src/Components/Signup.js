import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-light" className="ms-2" onClick={handleShow}>
        <i className="fa fa-user-plus"></i> Register
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Button variant="outline-dark" className="w-100 mb-2" type="button">
              <i className="fa fa-google me-2"></i> Sign Up with Google
            </Button>
            <Button variant="outline-dark" className="w-100 mb-2" type="button">
              <i className="fa fa-facebook me-2"></i> Sign Up with Facebook
            </Button>
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
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTerms">
              <Form.Check
                type="checkbox"
                label="I agree to the terms and conditions"
                required
              />
            </Form.Group>
            <Button variant="dark" className="w-100" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signup;
