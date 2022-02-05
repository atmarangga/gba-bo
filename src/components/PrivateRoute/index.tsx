import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import AuthPage from '../../pages/Login';
import { authenticationCheck } from '../../utils';

export default function PrivateRoute(element: Component, path: string) {
    return (<Route path={path} element={authenticationCheck() ? element : <AuthPage />} />)
}