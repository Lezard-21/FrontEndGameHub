import { useState, useEffect } from 'react';
import AccesoDenegado from '../components/AccesoDenegado.jsx';
import { API_URL } from '../App.jsx';
import { getTokenLocalStorage } from '../utils/localStorage.js';
import { useNavigate } from 'react-router-dom';

const FormularioJuego = ({ juegoId }) => {
    const [nombreJuego, setNombreJuego] = useState('');
    const [plataforma, setPlataforma] = useState('');
    const [estatusId, setEstatusId] = useState(0); // Valor por defecto a 0 para "Seleccionar Estatus"
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
    }, [juegoId, token]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            console.error('Token no válido o no presente');
            return <AccesoDenegado />;
        }

        if (estatusId === 0) {
            alert('Por favor, selecciona un estatus válido.');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/juegos`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre_juego: nombreJuego, plataforma, estatusId, url_imagen: urlImagen }),
            });

            if (response.ok) {
                console.log('Juego registrado exitosamente');
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
                            placeholder="Ejem: Gears of Wars"
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
                            placeholder="Ejem: Xbox"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Disponibilidad:</label>
                    <div className="control">
                        <div className="select">
                            <select value={estatusId} onChange={(e) => setEstatusId(Number(e.target.value))} required>
                                <option value={0}>Seleccionar Estatus</option>
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
                            placeholder="Ejem: http://image.jpg"
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
