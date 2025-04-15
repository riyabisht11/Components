import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatsMain from './StatsMain'
import ViewAll from './Components/ViewAll'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StatsMain />} />
          <Route path="/viewall" element={<ViewAll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
