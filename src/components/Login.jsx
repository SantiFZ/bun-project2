import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [form,setform] = useState({username:"",password:""})
    const navigate = useNavigate()

    const sigin = async (event) =>{
        event.preventDefault();
        const response = await axios.post("http://localhost:3001/users/login",form)
        if(response.status === 200){
            localStorage.setItem("user",JSON.stringify(form))
            navigate("/todo")
        }else{
            alert("El usuario no existe.")
        }
        console.log(response)


    }

    const handleChange = (e) =>{
        setform({...form, [e.target.name]:e.target.value})
        
    }
    return(
            
        <div className='container'>
            <form onSubmit={sigin}>
            <img src="/Logo-principal.png" alt="" className='logo-principal'/>
          <h1 className='login-title'>Iniciar Sesion</h1>
            <input name='username' type="text" className='todo-input' placeholder='Usuario' onChange={handleChange}/>
            <input name='password' type="password" className='todo-input' placeholder='********' onChange={handleChange}/>
            <button className='todo-btn' type='submit'>Iniciar Sesion</button>
        </form>
        </div>
    )
}

export default Login