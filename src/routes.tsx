import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './components/Auth/ProtectedRoute';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/PasswordReset/ForgotPassword';
import ResetPassword from './components/Auth/PasswordReset/ResetPassword';
import EmailSent from './components/Auth/PasswordReset/EmailSent';
import ResetSuccessful from './components/Auth/PasswordReset/ResetSuccessful';

export default (
  <Switch>
    <Route path='/login' exact component={Login} />
    <Route path='/register' exact component={Register} />
    <Route path='/forgot-password' exact component={ForgotPassword} />
    <Route path='/reset-password/:token' exact component={ResetPassword} />
    <Route path='/email-sent' exact component={EmailSent} />
    <Route path='/reset-successful' exact component={ResetSuccessful} />

    <ProtectedRoute path='/home' exact component={Dashboard} />

    <Route path='/' exact component={Login} />

    <Route component={NotFound} />
  </Switch>
);
