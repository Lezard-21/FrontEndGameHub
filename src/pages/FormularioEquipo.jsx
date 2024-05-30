import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext.jsx';
import AccesoDenegado from '../components/AccesoDenegado.jsx';
import { API_URL } from '../App.jsx';

const FormularioEquipo = () => {
    
    const location = useLocation();
    const [equipo, setEquipo] = useState(location.state?.equipo || null);

    const { autUser, isLoggedIn } = useAuth();


    const buscarEquipo = async (e) => {
        if (e) e.preventDefault();

        if (!autUser || !autUser.token) {
            console.error('Token no válido o no presente');
            return;
        }

        try{
            const response = await fetch(`${API_URL}/equipos/${equipo.equipoId}`, {
                headers: {
                    'Authorization': `Bearer ${autUser.token}`
                }
            });

            if(response.ok){
                const data = await response.json();
                setEquipo(data);
            }else{
                console.error('Error al obtener los datos del equipo');
            }
        }catch(error){
            console.error('Error occurred:', error);
        }
    }

    useEffect(() => {
            buscarEquipo();
    }, []);

    if (!isLoggedIn) return <AccesoDenegado />;

    if (!equipo) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Modificar Equipo {equipo.nombre}</h1>
            {/* Formulario con la información del equipo */}
        </div>
    );
}

export default FormularioEquipo;
