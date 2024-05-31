import React from 'react'
import CardEmpleado from '../components/CardEmpleado'
import { Link } from 'react-router-dom'
import { API_URL } from '../App'

import { useAuth } from '../auth/AuthContext.jsx';

const ListaEmpleados = () => {

    const {
        authUser
    } = useAuth()

    const [empleados, setEmpleados] = React.useState([])

    const getEmpleados = async () => {
        try {
            const respuesta = await fetch(API_URL+"/usuarios", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authUser.token}`
                }
            })

            if (respuesta.ok) {
                const data = await respuesta.json()
                setEmpleados(data)
                console.log(data);
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

    React.useEffect( () => {
        getEmpleados()
    }, [])

    return (
        <div class="hero is-fullwidth">
    
            <section class="has-text-right ">
                <Link to="/autenticated/empleados/agregar">
                    <a class="button is-success " href="#">
                        <span>Agregar empleado</span>
                    </a>
                </Link>
            </section>
            <div className='contenedor-juegos'>
                <div class="fixed-grid has-4-cols">
                    <div class="grid is-gap-5 ispad">
                        {
                            empleados.map((empleado) => (
                                 <CardEmpleado nombre={empleado.nombre} username={empleado.username} rol={empleado.rol}  />
                            ))
                        }
                        
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaEmpleados