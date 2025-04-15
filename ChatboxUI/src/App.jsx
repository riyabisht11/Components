import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import ChatUi from "./ChatUi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatUi />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
