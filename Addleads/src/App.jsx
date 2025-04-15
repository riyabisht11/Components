import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Campaign from './Campaign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Campaign/>
    </>
  )
}

export default App
