import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import CardVideojuego from '../components/CardVideojuego.jsx';
import AccesoDenegado from '../components/AccesoDenegado.jsx';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP
import { useAuth } from '../auth/AuthContext.jsx';
import { URL_API } from '../constants/Constants.js';
import { getTokenLocalStorage } from '../utils/localStorage.js';

const ListaVideojuegos = () => {
    const { isLoggedIn } = useAuth();
    const [videojuegos, setVideojuegos] = useState([]); // Estado para almacenar los videojuegos
    const navigate = useNavigate(); // Hook de navegación

    useEffect(() => {
        // Función para obtener la lista de videojuegos
        const fetchVideojuegos = async () => {
            try {
                const token = getTokenLocalStorage('token');
                const response = await axios.get(URL_API + '/juegos', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(response); // Agrega esta línea para ver la respuesta completa en la consola
                if (response.status === 200) {
                    setVideojuegos(response.data);
                } else {
                    console.error('Error al obtener los juegos');
                    if (response.status === 401) {
                        navigate('/login');
                    }
                }
            } catch (error) {
                console.error('Error al obtener los videojuegos:', error);
            }
        };

        if (isLoggedIn) {
            fetchVideojuegos(); // Llama a la función para obtener los videojuegos si el usuario está autenticado
        }
    }, [isLoggedIn]);

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

