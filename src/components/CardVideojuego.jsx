import { useNavigate } from 'react-router-dom';
import { deleteMethod } from '../http';
import { URL_API } from '../constants/Constants';
import { getTokenLocalStorage } from '../utils/localStorage';

const CardVideojuego = ({ videojuego }) => {
    const isActive = videojuego.estatus.nombre_estatus === 'Activo';
    const color = isActive ? 'green' : 'red';
    const navigate = useNavigate();

    const handleModificarClick = () => {
        navigate(`/autenticated/juegos/modificar/${videojuego.juegoId}`, { state: { juegoId: videojuego.juegoId } });
    };
    
    
    const handleEliminar = async () => {
            const response = await fetch(`${URL_API}/autenticated/juegos/${videojuego.juegoId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${getTokenLocalStorage()}`, // Asegúrate de obtener el token correctamente
                }
            });
        };

    return (
        <div className="cell is-one-fifth">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            src={videojuego.url_imagen !== 'N/A' ? videojuego.url_imagen : 'https://bulma.io/images/placeholders/1280x960.png'}
                            alt="Imagen del juego"
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-5">Juego: {videojuego.juegoId}</p>
                            <p className="title is-5">{videojuego.nombre_juego}</p>
                            <p className="subtitle is-6">{videojuego.plataforma}</p>
                            <p className="subtitle is-4" style={{ color }}>{videojuego.estatus.nombre_estatus}</p>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a className="card-footer-item" onClick={handleModificarClick}>Modificar</a>
                    <a className="card-footer-item" onClick={handleEliminar}>Eliminar</a>
                </footer>
            </div>
        </div>
    );
};

export default CardVideojuego;