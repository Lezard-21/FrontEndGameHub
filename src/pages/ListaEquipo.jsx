import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardEquipo from '../components/CardEquipo.jsx';
import { API_URL } from '../App.jsx';
import { getTokenLocalStorage } from '../utils/localStorage.js';
const ListaEquipo = () => {

    const [equipos, setEquipos] = useState([]);
    const [loading, setLoading] = useState(false)
    const [filterKeyword, setFilterKeyword] = useState('')
    const navigate = useNavigate();
    
    const handleCrearClick = () => {
        navigate('/autenticated/equipos/agregar');
    };

    const buscarEquipos = async (e) => {
        if (e) e.preventDefault();

        try {
            setLoading(true)
            const response = await fetch(`${API_URL}/equipos`, {
                headers: {
                    'Authorization': `Bearer ${getTokenLocalStorage('token')}`
                }
            });
            setLoading(false)

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
    const filterEquipos = () => {
        if (!filterKeyword) {
            return equipos
        }
        return equipos.filter(item =>
            item.nombre.toLowerCase().includes(filterKeyword.toLowerCase()) ||
            item.disponibilidad.nombre_disponibilidad.toLowerCase().includes(filterKeyword.toLowerCase()))
    }

    useEffect(() => {
        buscarEquipos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
            <div className="canva" >
            <img className='fondo' src='./src/assets/juegos.jpg' alt="fondo" />
                <div className="hero is-fullheight" >
                    <div className='contenedor-juegos'>
                        <p className="title is-2">Equipos</p>
                        <button className='button is-info is-medium is-outlined sticyButton' onClick={handleCrearClick}>Agregar</button>
                        <br/>
                        <div className='container searchBarContainer'>
                            <input className='input is-rounded is-medium is-left' placeholder='Buscar por equipo ó disponibilidad' value={filterKeyword} onChange={(e) => setFilterKeyword(e.target.value)} />
                        </div>
                        <br />
                        <div className="grid is-gap-5 ispad">
                            {filterEquipos().length > 0
                                ? (
                                    filterEquipos().map((equipo) => (
                                        <CardEquipo key={equipo.equipoId} equipo={equipo} />
                                    ))
                                ) : (
                                    loading
                                        ? (
                                            <h1>Parece que aún no hay equipos registrados</h1>
                                        ) : (
                                            <p>Error al cargar los equipos</p>
                                        )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default ListaEquipo;
