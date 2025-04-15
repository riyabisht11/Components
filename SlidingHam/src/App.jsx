import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Layout/Home";
import Setting from "./Components/Setting";
import Add from "./Components/Add";
import Hours from "./Components/Hours";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/hours" element={<Hours />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
