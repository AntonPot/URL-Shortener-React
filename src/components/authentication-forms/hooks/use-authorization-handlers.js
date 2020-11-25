import { useState } from 'react';
import remoteClient from '../../../utils/remote-client';

const useAuthorizationHandlers = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [responseErrors, setResponseErrors] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handlePasswordConfirmationChange = (event) => setPasswordConfirmation(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isRegistration = props.location.pathname === "/registration"
    let payload = {
      user: {
        email: email,
        password: password
      }
    }

    if (isRegistration) {
      payload.user.password_confirmation = passwordConfirmation
    }

    const response = await remoteClient.post((isRegistration ? '/registrations' : '/login'), payload);

    if (response.data.logged_in) {
      props.handleLogin(response.data);
      props.history.push('/');
    } else {
      setResponseErrors(response.data);
    }
  };

  return {
    responseErrors, handleEmailChange, handlePasswordChange,
    handlePasswordConfirmationChange, handleSubmit
  }
};

export default useAuthorizationHandlers;
