import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-500 hover:text-yellow-400 p-4 bg-pink-500' >Hello | User</h1>
    </>
  )
}

export default App
