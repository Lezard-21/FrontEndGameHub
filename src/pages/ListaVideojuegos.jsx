import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import CardVideojuego from '../components/CardVideojuego.jsx';
import AccesoDenegado from '../components/AccesoDenegado.jsx';
import { useAuth } from '../auth/AuthContext.jsx';
import { URL_API } from '../constants/Constants.js';
import { getTokenLocalStorage } from '../utils/localStorage.js';

const ListaVideojuegos = () => {
    const [videojuegos, setVideojuegos] = useState([]); // Estado para almacenar los videojuegos
    const navigate = useNavigate(); // Hook de navegación

    const fetchVideojuegos = async () => {
        try {
            const response = await fetch(URL_API + "/juegos", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getTokenLocalStorage('token')}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setVideojuegos(data);
            } else {
                console.error('Error:', response.status, response.statusText);
                const errorData = await response.json();
                console.error('Respuesta del servidor:', errorData);
                if (response.status === 401) {
                    navigate('/login');
                }
            }
        } catch (error) {
            console.error('Error al obtener los videojuegos:', error);
        }
    };

    useEffect(() => {
        fetchVideojuegos();
    }, []);

    const handleNuevoJuegoClick = () => {
        navigate(`/autenticated/juegos/nuevo`);
    };

    return (
        <>
            <div className="hero is-fullwidth">
                <div className='contenedor-videojuegoss'>
                    <div className="fixed-grid has-4-cols">
                        <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <p className="title is-2">Juegos</p>
                            <button className="button is-primary" onClick={handleNuevoJuegoClick}>
                                Añadir Nuevo Juego
                            </button>
                        </div>
                        <div className="grid is-gap-5 ispad">
                            {videojuegos.map((videojuego) => (
                                <CardVideojuego key={videojuego.juegoId} videojuego={videojuego} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListaVideojuegos;
