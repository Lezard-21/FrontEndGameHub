import React from 'react'
import NavBar from '../components/NavBar'
import CardEquipo from '../components/CardEquipo'
import { API_URL } from '../App'
import { useEffect, useState } from 'react'
const ListaEquipo = () => {
    const [equipos, setEquipos] = useState([]);

    const buscarEquipos = async (e) => {
        if (e) e.preventDefault();
        const response = await fetch(`${API_URL}/equipos`);
        const data = await response.json();
        setEquipos(data);
    };

    useEffect(() => {
        buscarEquipos();
    }, []);

    return (
        <>
            <div className="hero is-fullwidth">
                <div className='contenedor-juegos'>
                    <div className="fixed-grid has-4-cols">
                        <p class="title is-2"> Equipos </p>
                        <div className="grid is-gap-5 ispad">
                            {equipos.map((equipo, index) => (
                                <CardEquipo key={index} equipo={equipo} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default ListaEquipo;