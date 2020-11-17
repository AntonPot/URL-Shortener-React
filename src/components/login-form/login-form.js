import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import remoteClient from '../../utils/remote-client';

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

    const response = await remoteClient.submit('/sessions', payload);

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
      <div className='login-form'>
        <h5>{loginErrors}</h5>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Email'
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            autoComplete='current-password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  };
};

export default LoginForm;
