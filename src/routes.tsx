import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './components/auth/ProtectedRoute';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

export default (
  <Switch>
    <Route path='/login' exact component={Login} />
    <Route path='/register' exact component={Register} />

    <ProtectedRoute path='/home' exact component={Dashboard} />

    <Route path='/' exact component={Login} />

    <Route component={NotFound} />
  </Switch>
);
