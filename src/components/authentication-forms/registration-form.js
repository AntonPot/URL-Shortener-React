import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import AlertPopup from './alert-popup';
import useAuthorizationHandlers from './hooks/use-authorization-handlers';

const RegistrationForm = (props) => {
  const {
    responseErrors, handleEmailChange, handlePasswordChange,
    handlePasswordConfirmationChange, handleSubmit
  } = useAuthorizationHandlers(props);

  return (
    <Form className="new-link-form" onSubmit={handleSubmit}>
      <AlertPopup responseErrors={responseErrors} />

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" onChange={handleEmailChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordConfirmationChange} />
      </Form.Group>

      <Form.Row>
        <Col lg={true}>
          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Col>
        <Col sm={'auto'}>
          <a href="/login">Login</a>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default RegistrationForm;
