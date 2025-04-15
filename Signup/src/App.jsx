import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import ForgotPass from "./ForgotPass";
import ConfirmPass from "./ConfirmPass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/confirmpass" element={<ConfirmPass />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
