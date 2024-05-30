import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardEquipo from '../components/CardEquipo.jsx';
import { API_URL } from '../App.jsx';
import { useAuth } from '../auth/AuthContext.jsx';
import AccesoDenegado from '../components/AccesoDenegado.jsx';
const ListaEquipo = () => {
    
    const [equipos, setEquipos] = useState([]);
    const navigate = useNavigate();
    
    const { authUser, isLoggedIn } = useAuth();

    const buscarEquipos = async (e) => {
        if (e) e.preventDefault();

        if (!authUser || !authUser.token) {
            console.error('Token no válido o no presente');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/equipos`, {
                headers: {
                    'Authorization': `Bearer ${authUser.token}`
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

    if (!isLoggedIn) {
        return <AccesoDenegado />;
    }

    return (
        <>
            <div className="hero is-fullwidth">
                <div className='contenedor-juegos'>
                    <div className="fixed-grid has-4-cols">
                        <p className="title is-2">Equipos</p>
                        <div className="grid is-gap-5 ispad">
                            {equipos.map((equipo) => (
                                <CardEquipo key={equipo.equipoId} equipo={equipo} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListaEquipo;
