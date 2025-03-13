import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-3xl ">
          <button className='outline-none px-4 bg-red-500 py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('red')}>Red</button>
          <button className='outline-none px-4 bg-yellow-500 py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('yellow')}>Yellow</button>
          <button className='outline-none px-4 bg-green-500 py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('green')}>Green</button>
          <button className='outline-none px-4 bg-blue-500 py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('blue')}>Blue</button>
          <button className='outline-none px-4 bg-pink-500 py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('pink')}>Pink</button>
          <button className='outline-none px-4 bg-orange-500 py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('orange')}>orange</button>
          <button className='outline-none px-4 bg-indigo-500 py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('indigo')}>Indigo</button>
          <button className='outline-none px-4 bg-gray-500 py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('gray')}>Gray</button>
          <button className='outline-none px-4 bg-lime-500 py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('lime')}>Lime</button>
          <button className='outline-none px-4 bg-teal-500 py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('teal')}>Teal</button>
          <button className='outline-none px-4 bg-white py-1 rounded-full shadow-lg  hover:border-black hover:border-2 cursor-pointer' onClick={()=>setColor('white')} >White</button>
          <button className='outline-none px-4 bg-black py-1 rounded-full shadow-lg text-white hover:border-gray-400 hover:border-2 cursor-pointer' onClick={()=>setColor('black')} >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
