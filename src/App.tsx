import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Dashboard } from "./pages";
import { authenticationCheck } from './utils';

export default function CoreRouteApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={authenticationCheck() ? <Dashboard /> : <Login />} />
        <Route path={'*'} element={authenticationCheck() ? <Dashboard /> : <Login />} />
        {/* <Route path={'home'} element={authenticationCheck() ? <Dashboard /> : <Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
