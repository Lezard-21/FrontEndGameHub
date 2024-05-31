import { useState, useEffect } from 'react';
import AccesoDenegado from '../components/AccesoDenegado.jsx';
import { API_URL } from '../App.jsx';
import { getTokenLocalStorage } from '../utils/localStorage.js';
import { useNavigate } from 'react-router-dom';

const FormularioJuego = ({ juegoId }) => {
    const [nombreJuego, setNombreJuego] = useState('');
    const [plataforma, setPlataforma] = useState('');
    const [estatusId, setEstatusId] = useState(1); // Cambiado de nombre_estatus a estatusId
    const [urlImagen, setUrlImagen] = useState('');
    const token = getTokenLocalStorage('token');
    const navigate = useNavigate();
    console.log('Token recibido:', token);

    useEffect(() => {
        if (juegoId && token) {
            const fetchJuego = async () => {
                try {
                    const response = await fetch(`${API_URL}/juegos/${juegoId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setNombreJuego(data.nombre_juego);
                        setPlataforma(data.plataforma);
                        setEstatusId(data.estatusId); // Cambiado de nombre_estatus a estatusId
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
    }, [juegoId, token]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            console.error('Token no válido o no presente');
            return <AccesoDenegado />;
        }

        try {
            const response = await fetch(`${API_URL}/juegos`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre_juego: nombreJuego, plataforma, estatusId, url_imagen: urlImagen }), // Cambiado de nombre_estatus a estatusId
            });

            if (response.ok) {
                console.log('Juego registrado exitosamente');
                navigate("/autenticated/juegos"); // Corregido el path de la redirección
            } else {
                console.error('Error al guardar el juego');
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Agregar Juego</h1>
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
                                <option value={1}>Activo</option> {/* Cambiado de Disponible a Activo */}
                                <option value={2}>No Disponible</option> {/* Cambiado de No Disponible a No Disponible */}
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

export default FormularioJuego;
