import React from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../App'
import { useAuth } from '../auth/AuthContext.jsx';

const CardEmpleado = ({nombre, username, rol}) => {

    const navigate = useNavigate();

    const {
        authUser,
    } = useAuth()

    const irEditar = () => {
        navigate(`/autenticated/empleados/modificar/${username}`, { state: { username } });
    }

    const confirmar = () => {
        if (confirm("¿Quieres eliminar este registro?") == true) {
            eliminarUsuario()
        } 
    }

    const eliminarUsuario = async () => {

        try {
            const respuesta = await fetch(`${API_URL}/usuarios/${username}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authUser.token}`,
                    'Content-Type': 'application/json',
                }
            })
            if (respuesta.ok) {
                alert("Empleado eliminado")
                navigate("/autenticated")
            }else {
                // Mostrar el estado y texto del estado de la respuesta
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
        <div class="cell isone">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <div className=''>
                                <p class="title is-5  ">Nombre: </p>
                                <p class="subtitle is-5  ">{nombre}</p>
                            </div>
                            <p class="subtitle is-6">Username: {username}</p>
                            <p class="subtitle is-6">Rol: {rol}</p>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a onClick={irEditar}  className="card-footer-item">Modificar</a>
                        <a onClick={confirmar} className="card-footer-item">Eliminar</a>
                    </footer>

                </div>
            </div>
        </div>
    )
}

export default CardEmpleado