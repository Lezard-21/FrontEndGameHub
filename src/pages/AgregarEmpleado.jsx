import React, { useState } from 'react'
import NavBar from '../components/NavBar'

import { API_URL } from '../App'
import { useAuth } from '../auth/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const AgregarEmpleado = () => {

    const {
        authUser,
    } = useAuth()

    const [username, setUsername] = useState("")
    const [nombre, setNombre] = useState("")
    const [rol, setRol] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const agregarEmpleado = async (event) => {
        event.preventDefault()
        console.log(username, nombre, rol, password);
        try {
            const respuesta = await fetch(API_URL + "/usuarios", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authUser.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                    "nombre": nombre,
                    "rol": rol
                })
            })

            if (respuesta.ok) {
                const data = await respuesta.json();
                alert("Empleado agregado")
                navigate("/autenticated/empleados")
                console.log(data);
            }else {
                // Mostrar el estado y texto del estado de la respuesta
                alert("Ocurrio un error, verifica los datos")
                console.log('Error:', respuesta.status, respuesta.statusText);
        
                // Intentar mostrar el cuerpo de la respuesta para más detalles
                const errorData = await respuesta.json();
                console.log('Respuesta del servidor:', errorData);
            }
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='hero is-fullheight'>
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
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} class="input" type="password" minLength={6} placeholder="Ingrese una contraseña" required />
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