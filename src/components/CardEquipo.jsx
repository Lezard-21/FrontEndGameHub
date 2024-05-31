import { useNavigate } from 'react-router-dom';
import { URL_API } from '../constants/Constants';
import { API_URL } from '../App.jsx';
import { getTokenLocalStorage } from '../utils/localStorage';

const CardEquipo = ({ equipo }) => {
    const disponibilidadColor = equipo.disponibilidad.nombre_disponibilidad === 'Disponible' ? 'green' : 'red';
    const navigate = useNavigate();

    const handleModificarClick = () => {
        navigate(`/autenticated/equipos/modificar/${equipo.equipoId}`, { state: { equipo } });
    };
    const handleEliminar = async (event) => {
        const token = getTokenLocalStorage();
        if (!token) {
            console.error('No se encontró el token en el local storage');
            return;
        }
        
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/equipos/:${equipo.equipoId}`, {
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${getTokenLocalStorage('token')}`,
                'Content-Type': 'application/json'
              }
            });

            if (response.ok) {
                console.log('Equipo eliminado exitosamente');
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }

    return (
        <div className="cell is-one-fifth">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            src={equipo.url_imagen !== 'N/A' ? equipo.url_imagen : 'https://bulma.io/images/placeholders/1280x960.png'}
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-5">Equipo: {equipo.equipoId}</p>
                            <p className="title is-5">{equipo.nombre}</p>
                            <p className="subtitle is-4" style={{ color: disponibilidadColor }}>{equipo.disponibilidad.nombre_disponibilidad}</p>
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
}

export default CardEquipo;
