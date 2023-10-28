import React from 'react'
import './Login.css'


const Login = () => {
    return(
        <div>
            <div className='container'>
                <div className='header'>
                    <div className='text'>Login</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <div className='input'></div>
                    <input type="text" />
                </div>
                <div className='input'>
                    <input type="password" />
                </div>
            </div>
            <div className='submit-container'>
                <div className='submit'>Login</div>
            </div>
        </div>
    )
}

export default Login