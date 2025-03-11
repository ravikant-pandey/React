import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)
  let [message, setMessage] = useState('') // State to store the message

  // let counter = 1

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
    }
    //  if (counter + 1 === 20) {
    //   setMessage("Counter Full! 🚀");
    // }

    // counter = counter + 1
    // counter++
    // setCounter(counter)
    // console.log("Value added..",counter)
  }

  const removeValue = () => {
    if (counter > 0) {
      // counter = counter-1
      // setCounter is refrence holder
      setCounter(counter - 1)
      // console.log("Value removed..",counter)
      if (counter > 0) {
        setCounter(counter - 1);
      }
      // if (counter - 1 === 0) {
      //   setMessage("Counter Empty! ❌");
      // }
    }
  }

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
