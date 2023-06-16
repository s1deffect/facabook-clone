import React from 'react'
import "./Login.css"
import LoginForm from '../components/LoginForm'
import Regiester from '../components/Regiester';
import { useState } from 'react';

const Login = () => {
    const [show, setShow] = useState(false)
    console.log(show)

    return (
    <div className='login'>
        <LoginForm
        setShow={()=> setShow(true)}
        />
        
        
    </div>
    
    )
}

export default Login