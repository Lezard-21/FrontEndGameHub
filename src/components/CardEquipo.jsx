import { useNavigate } from 'react-router-dom';
import { URL_API } from '../constants/Constants';
import { getTokenLocalStorage } from '../utils/localStorage';
import { deleteMethod } from '../http/index';

const CardEquipo = ({ equipo, buscarEquipos }) => {
    const disponibilidadColor = equipo.disponibilidad.nombre_disponibilidad === 'Disponible' ? 'green' : 'red';
    const navigate = useNavigate();

    const handleModificarClick = () => {
        navigate(`/autenticated/equipos/modificar/${equipo.equipoId}`, { state: { equipo } });
    };

    const handleEliminar = () => {
        deleteMethod(`${URL_API}/equipos`,getTokenLocalStorage('token'),equipo.equipoId);
        buscarEquipos();
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
