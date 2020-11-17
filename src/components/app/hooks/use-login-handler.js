import { useState, useEffect } from "react";
import remoteClient from '../../../utils/remote-client';

const useLoginHandler = (props) => {
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = (data) => {
    setLoggedInStatus('LOGGED_IN');
    setUser(data.user);
  }

  const handleLogout = () => {
    setLoggedInStatus('NOT_LOGGED_IN');
    setUser({});
  };

  const handleLogoutClick = async () => {
    const response = await remoteClient.delete('/logout');
    if (response.status === 200) {
      handleLogout();
    } else {
      setAlertMessage('Something went wrong')
    }
  };

  const checkLoginStatus = async () => {
    const response = await remoteClient.get('/logged_in');

    if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
      handleLogin(response.data);
    } else if (!response.data.logged_in && loggedInStatus === 'LOGGED_IN') {
      handleLogout();
    }
  }

  useEffect(() => checkLoginStatus(), [])

  return { loggedInStatus, user, alertMessage, handleLogin, handleLogout, handleLogoutClick }
};

export default useLoginHandler;
