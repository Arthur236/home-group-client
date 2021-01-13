import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainWrapper from './components/wrappers/MainWrapper';
import DashboardWrapper from './components/wrappers/DashboardWrapper';

import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

export default (
  <Switch>
    <Route path='/login' exact>
      <MainWrapper><Login /></MainWrapper>
    </Route>

    <Route path='/register' exact>
      <MainWrapper><Register /></MainWrapper>
    </Route>

    <Route path='/home' exact>
      <DashboardWrapper><Dashboard /></DashboardWrapper>
    </Route>

    <Route path='/' exact>
      <MainWrapper><Login /></MainWrapper>
    </Route>

    <Route>
      <MainWrapper><NotFound /></MainWrapper>
    </Route>
  </Switch>
);
