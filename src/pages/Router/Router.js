import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../Main/Main";
import Login from "../Login/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
