import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login, Dashboard } from "./pages";
import { authenticationCheck } from './utils';

export default function CoreRouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'dashboard'} element={authenticationCheck() ? <Dashboard /> : <Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
}
