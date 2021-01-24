import React from 'react';
import { Redirect, RouteProps } from 'react-router-dom';

const ProtectedRoute = (props: RouteProps) => {
  const { component } = props;

  const Component = component;
  const isAuthenticated = localStorage.getItem('token');

  return isAuthenticated ? (
    // @ts-ignore
    <Component />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
};

export default ProtectedRoute;
