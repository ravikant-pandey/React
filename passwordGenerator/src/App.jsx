import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false) // New state for button color change

  // Reference to the input field
  const passwordRef = useRef(null)

  // Password Generator Function
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/`~"

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed])

  // Generate password when dependencies change
  useEffect(() => { passwordGenerator() }, [length, numAllowed, charAllowed, passwordGenerator])

  // Copy to Clipboard Function
  const copyToClipboard = () => {
    if (passwordRef.current) {
      passwordRef.current.select()
      passwordRef.current.setSelectionRange(0, 99999) // Select text
      navigator.clipboard.writeText(passwordRef.current.value)
        .then(() => {
          setCopied(true) // Set copied state to true
          setTimeout(() => setCopied(false), 2000) // Reset after 2s
        })
        .catch(err => console.error("Failed to copy password:", err))
    }
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <div className="bg-gray-800 rounded-lg shadow-lg p-10 w-140">

          {/* Heading */}
          <h2 className="text-white text-center mb-4 hover:text-red-500 cursor-pointer font-bold text-2xl">
            Password Generator
          </h2>

          {/* Password Display & Copy Button */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={password}
              className="w-full p-2 bg-white text-gray-700 rounded-md outline-none"
              placeholder="Generated Password"
              readOnly
              ref={passwordRef}
            />
            <button
              className={`outline-none px-4 py-2 shrink-0 rounded-lg transition-all duration-400 cursor-pointer
              ${copied ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"} active:bg-green-700 active:scale-95`}
              onClick={copyToClipboard}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Controls: Length Slider & Checkboxes */}
          <div className="mt-4 flex flex-col gap-3">

            {/* Password Length */}
            <div className="flex items-center gap-3 text-white">
              <label>Password Length: {length}</label>
              <input
                type="range"
                min="8"
                max="100"
                className="cursor-pointer"
                value={length}
                onChange={(evt) => setLength(parseInt(evt.target.value, 10))}
              />
            </div>

            {/* Checkboxes */}
            <div className="flex items-center gap-4 text-white">
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={numAllowed}
                  className="cursor-pointer"
                  onChange={() => setNumAllowed(prev => !prev)}
                />
                Include Numbers
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={charAllowed}
                  className="cursor-pointer"
                  onChange={() => setCharAllowed(prev => !prev)}
                />
                Include Symbols
              </label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
