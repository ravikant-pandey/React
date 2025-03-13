import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(1)
  const [message, setMessage] = useState('') // State to store the message

  // let counter = 1

  const addValue = () => {
    setCounter(prevCounter => {
      if (prevCounter < 20) {
        return prevCounter + 1; // ✅ Increments counter without message
      }
      return prevCounter;
    });
  };

  const removeValue = () => {
    setCounter(prevCounter => {
      if (prevCounter > 0) {
        return prevCounter - 1; // ✅ Decrements counter without message
      }
      return prevCounter;
    });
  };

  return (
    <>
      <h1>Hello | Ravikant Pandey</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value ➕ </button>
      <button onClick={removeValue}>Remove value ➖</button>
      <p>Counter: {counter}</p>

      {/* Show message only when counter is 20 or 0
      {(counter === 20 || counter === 0) && (
        <p>{message}</p>
      )} */}

      {/* Message without using extra state */}
      {(counter === 20 || counter === 0) && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          {counter === 20 ? "Counter Full! 🚀" : "Counter Empty! ❌"}
        </p>
      )}
    </>
  )
}

export default App
