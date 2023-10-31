import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [form, setform] = useState({ username: "", password: "" })
    const navigate = useNavigate()

    const sigin = async (event) => {
        event.preventDefault();
        const response = await toast.promise(axios.post("http://localhost:3001/users/login", form), {
            loading: "Iniciando sesion...",
            success: "Sesion iniciada correctamente",
            error: "No existe el usuario"
        })
        if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(form))
            navigate("/todo")
        } else {
            alert("El usuario no existe.")
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }
    return (
        <section className='big-container'>
            <div className='container'>
                <form className='login-form' onSubmit={sigin}>
                    <img src="/LogoPrincipal.png" alt="" className='logo-principal' />
                    <h1 className='login-title'>Iniciar Sesion</h1>
                    <input name='username' type="text" className='todo-input' placeholder='Usuario' onChange={handleChange} />
                    <input name='password' type="password" className='todo-input' placeholder='********' onChange={handleChange} />
                    <button className='todo-btn login-btn' type='submit'>Iniciar Sesion</button>
                </form>
            </div>
        </section>
    )
}

export default Login