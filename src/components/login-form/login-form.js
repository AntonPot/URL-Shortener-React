import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import remoteClient from '../../utils/remote-client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const LoginAlert = (props) => {
  if (props.loginErrors !== '') {
    return (<Alert variant="warning">{props.loginErrors}</Alert>);
  } else {
    return ( null );
  }
}

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      user: {
        email: email,
        password: password
      }
    }

    const response = await remoteClient.post('/sessions', payload);

    if (response.data.logged_in) {
      props.handleLogin(response.data);
      props.history.push('/');
    } else {
      setLoginErrors('Unable to login');
    }
  };

  if (props.loggedInStatus === 'LOGGED_IN') {
    return (<Redirect to='/' />)
  } else {
    return (
      <Form className="new-link-form" onSubmit={handleSubmit}>
        <LoginAlert loginErrors={loginErrors} />
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={handleEmailChange} />    
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
      </Form>
    );
  };
};

export default LoginForm;
