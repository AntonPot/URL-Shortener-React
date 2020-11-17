import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../home/home';
import LoginForm from '../login-form/login-form.js';
import useLoginHandler from "./hooks/use-login-handler";
import './app.css';


const App = () => {
  const {
    loggedInStatus,
    user,
    handleLogin,
    handleLogout
  } = useLoginHandler();

  return (
    <div className="app">
      <h3 className="app-title">URL Shortener</h3>
      <h5 className="login-status">Login status: {loggedInStatus}</h5>
      <h5 className="login-status">User email: {user.email}</h5>
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
            path={'/'}
            render={(props) => {
              if (loggedInStatus === 'LOGGED_IN') {
                return ( <Home handleLogout={handleLogout}/>)
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
