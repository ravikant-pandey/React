import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
// You can give different name of file and function name
export default function Protected({ children, authentication = true }) {
    // This is a protected route, only accessible to authenticated users
    return (
        <div>AuthLayout</div>
    )
}

// This is machnisumm In what ways to protect pages and routes