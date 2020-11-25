import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import AlertPopup from './alert-popup';
import useAuthorizationHandlers from './hooks/use-authorization-handlers';

const LoginForm = (props) => {
  const {
    responseErrors, handleEmailChange, handlePasswordChange, handleSubmit
  } = useAuthorizationHandlers(props);

  if (props.loggedInStatus === 'LOGGED_IN') {
    return (<Redirect to='/' />)
  } else {
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

        <Form.Row>
          <Col xs={7}>
            <Button variant="primary" type="submit">
                Login
            </Button>
          </Col>
          <Col>
          <div>
            <a href="/registration">I don't have an account</a>
            <br />
            <a href="/">I forgot my password</a>
          </div>
          </Col>
        </Form.Row>
      </Form>
    );
  };
};

export default LoginForm;
