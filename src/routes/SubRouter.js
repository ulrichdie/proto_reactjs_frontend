/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Accueil from "../pages/Accueil";
// import Menu1 from "../pages/Menu1";
import SousMenu1 from "../pages/SousMenu1";
import SousMenu2 from "../pages/SousMenu2";
import SousMenu3 from "../pages/SousMenu3";
import Menu2 from "../pages/Menu2";
import Menu3 from "../pages/Menu3";
import { Error } from "@material-ui/icons";
import Header from "../components/Header";

function SubRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='sousmenu1' element={<SousMenu1 />} />
        <Route path='sousmenu2' element={<SousMenu2 />} />
        <Route path='sousmenu3' element={<SousMenu3 />} />
        <Route path='menu2' element={<Menu2 />}>
          {/* <Route path='sousmenu1' element={<Menu3 />} />
          <Route path=':menuID1/menuID2' element={<Menu4 />} /> */}
        </Route>
        <Route path='menu3' element={<Menu3 />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SubRouter;
