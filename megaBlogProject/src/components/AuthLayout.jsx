import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
// You can give different name of file and function name
export default function Protected({ children, authentication = true }) {
    // This is a protected route, only accessible to authenticated users
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)
    useEffect(() => {

        //TODO: Make it more easy to understand

        // if(authStatus===true)
        // {
        //     navigate('/')
        // }
        // else if(authStatus===false)
        // {
        //     navigate("/login")
        // }

        // let authVal = authStatus === true ? true : false
        // true && (suppse authStatus = false so) false !== true = true (AND)
        if (authentication && authStatus !== authentication) {
            // If the user is not authenticated, redirect to the login page
            navigate("/login")
            // false && (true !== true means) false 
        } else if (!authentication && authStatus !== authentication) {
            // If the user is authenticated, redirect to the home page
            navigate("/")
        }
        setLoading(false)
    }, [authStatus, navigate, authentication])
    return (
        loading ? <h1>Loading</h1> : <>{children}</>
    )
}

// This is machnisumm In what ways to protect pages and routes