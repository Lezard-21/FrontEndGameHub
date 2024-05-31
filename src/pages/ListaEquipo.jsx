import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardEquipo from '../components/CardEquipo.jsx';
import { API_URL } from '../App.jsx';
import { getTokenLocalStorage } from '../utils/localStorage.js';
const ListaEquipo = () => {
    
    const [equipos, setEquipos] = useState([]);
    const navigate = useNavigate();
    
    const handleCrearClick = () => {
        navigate('/autenticated/equipos/agregar');
    };

    const buscarEquipos = async (e) => {
        if (e) e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/equipos`, {
                headers: {
                    'Authorization': `Bearer ${getTokenLocalStorage('token')}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setEquipos(data);
            } else {
                console.error('Error al obtener los equipos');
                if (response.status === 401) {
                    // Token no válido o expirado, redirigir al login
                    navigate('/login');
                }
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    useEffect(() => {
        buscarEquipos();
    }, []);

    return (
        <>
            <div className="canva" >
            <img className='fondo' src='./src/assets/juegos.jpg' alt="fondo" />
            <div className="hero is-fullheight" >
                <div className='contenedor-juegos'>
                    <p className="title is-2">Equipos</p>
                    <button className='button is-info is-outlined is-medium is-responsive is-fullwidth' onClick={handleCrearClick}>Agregar</button>
                    <br />
                    <div className="fixed-grid has-3-cols">
                        <div className="grid is-gap-5 ispad">
                            {equipos.map((equipo) => (
                                <CardEquipo key={equipo.equipoId} equipo={equipo} buscarEquipos={buscarEquipos}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default ListaEquipo;
