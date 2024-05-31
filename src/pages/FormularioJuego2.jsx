import { useState, useEffect } from 'react';
import AccesoDenegado from '../components/AccesoDenegado.jsx';
import { API_URL } from '../App.jsx';
import { getTokenLocalStorage } from '../utils/localStorage.js';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const FormularioJuego2 = () => {
    const location = useLocation();
    const juegoId = location.state ? location.state.juegoId : null;

    const [id, setJuegoId] = useState(juegoId);
    const [nombreJuego, setNombreJuego] = useState('');
    const [plataforma, setPlataforma] = useState('');
    const [estatusId, setEstatusId] = useState(1);
    const [urlImagen, setUrlImagen] = useState('');
    const token = getTokenLocalStorage('token');
    const navigate = useNavigate();
    console.log('Token recibido:', token);

    useEffect(() => {
        console.log('Valor de juegoId:', juegoId); // Agregar esta línea para imprimir el valor de juegoId
        if (id && token) {
            const fetchJuego = async () => {
                try {
                    const response = await fetch(`${API_URL}/juegos/${id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setJuegoId(data.juegoId);
                        setNombreJuego(data.nombre_juego);
                        setPlataforma(data.plataforma);
                        setEstatusId(data.estatusId);
                        setUrlImagen(data.url_imagen);
                    } else {
                        console.error('Error al obtener los datos del juego');
                    }
                } catch (error) {
                    console.error('Error al cargar los datos del juego:', error);
                }
            };
            fetchJuego();
        }
    }, [id, token, juegoId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            console.error('Token no válido o no presente');
            return <AccesoDenegado />;
        }

        try {
            const response = await fetch(`${API_URL}/juegos/${juegoId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ juegoId, nombre_juego: nombreJuego, plataforma, url_imagen: urlImagen, estatusId }),
            });

            if (response.ok) {
                console.log('Juego editado exitosamente');
                navigate("/autenticated/juegos");
            } else {
                console.error('Error al guardar el juego');
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Editar Juego</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Nombre:</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={nombreJuego}
                            onChange={(e) => setNombreJuego(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Plataforma:</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={plataforma}
                            onChange={(e) => setPlataforma(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Disponibilidad:</label>
                    <div className="control">
                        <div className="select">
                            <select value={estatusId} onChange={(e) => setEstatusId(e.target.value)} required>
                                <option value={1}>Activo</option>
                                <option value={2}>No Disponible</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">URL de la Imagen:</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={urlImagen}
                            onChange={(e) => setUrlImagen(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-primary" type="submit">Guardar Cambios</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormularioJuego2;

