import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Appp() {
    const [counter, setCounter] = useState(1)
    const [message, setMessage] = useState('') // State to store the message


    const addValue = () => {
        // setCounter(counter +1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
    };

    const removeValue = () => {
        setCounter(prevCounter => prevCounter - 1);  // ✅ Safe decrement
    };

    return (
        <>
            <h1>Hello | Ravikant Pandey</h1>
            <h2>Counter value : {counter}</h2>
            <button onClick={addValue}>Add value ➕ </button>
            <button onClick={removeValue}>Remove value ➖</button>
            <p>Counter: {counter}</p>
        </>
    )
}

export default Appp
