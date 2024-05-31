import { useState } from 'react'

import { API_URL } from '../App'
import { useNavigate } from 'react-router-dom';
import { getTokenLocalStorage } from '../utils/localStorage.js';

const AgregarEmpleado = () => {

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
                    'Authorization': `Bearer ${getTokenLocalStorage('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                    "nombre": nombre,
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
                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control">
                                        <input value={username} onChange={(e) => setUsername(e.target.value)} className="input" type="text" placeholder="Ingrese el nombre de usuario" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Nombre</label>
                                    <div className="control">
                                        <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="input" type="text" placeholder="Ingrese el nombre real" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Rol</label>
                                    <div className="select">
                                        <select value={rol} onChange={(e) => setRol(e.target.value)} >
                                            <option value="Administrador">Administrador</option>
                                            <option selected value="Recepcionista">Recepcionista</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Constraseña</label>
                                    <div className="control">
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="input" type="password" minLength={6} placeholder="Ingrese una contraseña" required />
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