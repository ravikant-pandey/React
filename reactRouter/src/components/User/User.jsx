import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-yellow-500 text-white text-4xl font-bold p-5 text-center' >User: {userid}</div>
  )
}

export default User