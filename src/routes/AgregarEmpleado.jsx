import React, { useState } from 'react'
import NavBar from '../components/NavBar'

import { API_URL } from '../App'
import { useAuth } from '../auth/AuthContext.jsx';

const AgregarEmpleado = () => {

    const {
        authUser,
    } = useAuth()

    const [username, setUsername] = useState("")
    const [nombre, setNombre] = useState("")
    const [rol, setRol] = useState("")
    const [password, setPassword] = useState("")

    const agregarEmpleado = async (event) => {
        event.preventDefault()
        try {
            const respuesta = await fetch(API_URL + "/usuarios", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authUser.token}`
                },
                body: {
                    "username": username,
                    "password": password,
                    "nombre": nombre,
                    "rol": rol
                }})
        } catch (error){
            console.log(error);
        }
    }



    return (
        <div className='hero is-fullheight'>
            <NavBar />
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form onSubmit={agregarEmpleado}>
                                <div class="field">
                                    <label class="label">Username</label>
                                    <div class="control">
                                        <input value={username} onChange={(e) => setUsername(e.target.value)} class="input" type="text" placeholder="Ingrese el nombre de usuario" required />
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Nombre</label>
                                    <div class="control">
                                        <input value={nombre} onChange={(e) => setNombre(e.target.value)} class="input" type="text" placeholder="Ingrese el nombre real" required />
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Rol</label>
                                    <div class="select">
                                        <select value={rol} onChange={(e) => setRol(e.target.value)} >
                                            <option value="Administrador">Administrador</option>
                                            <option selected value="Recepcionista">Recepcionista</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Constraseña</label>
                                    <div class="control">
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} class="input" type="password" placeholder="Ingrese una contraseña" required />
                                    </div>
                                </div>
                                <button type="submit" className="button is-success has-background-link-light">
                                    Agregar empleado
                                </button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default AgregarEmpleado