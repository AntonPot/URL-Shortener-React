import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../home/home';
import LoginForm from '../authentication-forms/login-form.js';
import RegistrationForm from '../authentication-forms/registration-form.js';
import useLoginHandler from "./hooks/use-login-handler";
import './app.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const UserLoginStatus = (props) => {
  if (props.loggedInStatus === 'LOGGED_IN') {
    return (
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="user-login-status-text" >Signed in as: {props.user.email}</Navbar.Text>
        <Button
          variant="outline-primary"
          onClick={() => props.handleLogoutClick()}
        >Logout</Button>
      </Navbar.Collapse>
    )
  } else {
    return (
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Sign in</Navbar.Text>
      </Navbar.Collapse>
    )
  }
}

// TODO: Add Password reset and CSV download

const App = () => {
  const {
    loggedInStatus,
    user,
    handleLogin,
    handleLogoutClick
  } = useLoginHandler();

  return (
    <div className="app">
      <Container className="app-navbar-container">
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand >URL Shortener</Navbar.Brand>
          <Navbar.Toggle />
          <UserLoginStatus
            user={user}
            loggedInStatus={loggedInStatus}
            handleLogoutClick={handleLogoutClick}
          />
        </Navbar>
      </Container>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={'/login'}
            render={(props) => (
              <LoginForm
                {...props}
                loggedInStatus={loggedInStatus}
                handleLogin={handleLogin}
              />
            )}
          />
          <Route
            exact
            path={'/registration'}
            render={(props) => (
              <RegistrationForm
                {...props}
                handleLogin={handleLogin}
              />
            )}
          />
          <Route
            exact
            path={'/'}
            render={() => {
              if (loggedInStatus === 'LOGGED_IN') {
                return ( <Home />)
              } else {
                return (<Redirect to="/login" />)
              }
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
