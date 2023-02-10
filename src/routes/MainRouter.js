/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
