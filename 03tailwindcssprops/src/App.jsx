import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // let myObj = {
  //   usename : "Raj",
  //   age : 24
  // }
  // let myArr = [1,2,3,4,5]
  // obj={myObj} 
  return (
    <>
    <Card username = "Rahul" btnText = "Read More"/>
    <Card username = "Raj" btnText = "Click Me!"/>
    <Card username = "Pandey" btnText = "Visit me"/>
    <h1 className='text-black font-bold hover:text-red-600 p-4 bg-amber-300 rounded-2xl'> Tailwind css</h1>
    </>
  )
}

export default App
