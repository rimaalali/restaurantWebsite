import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home/Home'
import Sweet from './pages/Sweet/Sweet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
      <Sweet/>
    </>
  )
}

export default App
