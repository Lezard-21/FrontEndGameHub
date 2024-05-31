import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import { API_URL } from '../App'
import { getTokenLocalStorage } from '../utils/localStorage.js';

const EditarEmpleado = () => {

    const location = useLocation();
    const [username, setUsername] = React.useState(location.state?.username || null);
    const [nombre, setNombre] = React.useState("")
    
    const navigate = useNavigate()

    const modificarEmpleado = async (event) => {
        event.preventDefault()
        try {
            const respuesta = await fetch(`${API_URL}/usuarios/${username}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${getTokenLocalStorage('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": "",
                    "nombre": nombre,
                    "rol": "Recepcionista"
                })
            })

            if (respuesta.ok) {
                alert("Empleado modificado")
                navigate("/autenticated/empleados")
            }else {
                // Mostrar el estado y texto del estado de la respuesta
                alert("Ocurrio un error, ")
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
                    <form onSubmit={modificarEmpleado}>
                        <h2 className="subtitle is-5">Modifica la información de: {username}</h2>
                        <div className="field">
                            <label className="label">Nombre</label>
                            <div className="control">
                                <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="input" type="text" placeholder="Ingrese el nombre real" required />
                            </div>
                        </div>
                        <button type="submit" className="button is-success has-background-link-light">
                            Modificar empleado
                        </button>
                    </form>
                </div>
            </div>
        </div>


    </div>

</div>
  )
}

export default EditarEmpleado