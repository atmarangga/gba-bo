import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Dashboard } from "./pages";

export default function CoreRouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login/>} />
        <Route path={"dashboard"} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
