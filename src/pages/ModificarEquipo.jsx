import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { URL_API } from '../constants/Constants.js';
import { getTokenLocalStorage } from '../utils/localStorage.js';

const ModificarEquipo = () => {
    
    const location = useLocation();
    const [equipo, setEquipo] = useState(location.state?.equipo || null);
    const [disponibilidades, setDisponibilidades] = useState([]);
    const [selectedOption, setSelectedOption] = useState(equipo.disponibilidadId || "");

    const modificarEquipo = async (e) => {
        if (e) e.preventDefault();

        try{
            const response = await fetch(`${URL_API}/equipos/${equipo.equipoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getTokenLocalStorage('token')}`
                },
                body: JSON.stringify({
                    equipoId: equipo.equipoId,
                    nombre: equipo.nombre,
                    url_imagen: equipo.url_imagen,
                    marca: equipo.marca,
                    modelo: equipo.modelo,
                    disponibilidadId:selectedOption
                })
            });

            
            if (response.ok) {
                alert('Equipo modificado correctamente');
                setEquipo('');
            }else{
                alert('Error al modificar el equipo');
            }


        }catch(error){
            console.error('Error occurred:', error);
        }

    }

    const buscarDisponibilidad = async (e) => {
        if (e) e.preventDefault();

        if (!getTokenLocalStorage('token')) {
            console.error('Token no válido o no presente');
            return;
        }

        try{

            const response = await fetch(`${URL_API}/disponibilidad`, {
                headers: {
                    'Authorization': `Bearer ${getTokenLocalStorage('token')}`
                }
            });

            if(response.ok){
                const data = await response.json();
                setDisponibilidades(data);
            }else{
                console.error('Error al obtener los datos de disponibilidad');
            }

        }catch(error){
            console.error('Error occurred:', error);
        }
    }

    const buscarEquipo = async (e) => {
        if (e) e.preventDefault();

        if (!getTokenLocalStorage('token')) {
            console.error('Token no válido o no presente');
            return;
        }

        try{
            const response = await fetch(`${URL_API}/equipos/${equipo.equipoId}`, {
                headers: {
                    'Authorization': `Bearer ${getTokenLocalStorage('token')}`
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
            buscarDisponibilidad();
    }, []);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div className="hero is-fullwidth">
                <div className='contenedor-juegos'>
                    <div className="fixed-grid has-4-cols">
                        <p className="title is-2">Modificar Equipo </p>
                        <div className='field'>
                            <label className="label">Nombre</label>
                            <div className='control'>
                                <input className="input is-focused" type="text" value={equipo.nombre} onChange={(e) => setEquipo({ ...equipo, nombre: e.target.value })} />
                            </div>
                        </div>

                        <div className='field'>
                            <label className="label">Imagen</label>
                            <div className='control'>
                                <input className="input is-focused" type="text" value={equipo.url_imagen} onChange={(e) => setEquipo({ ...equipo, url_imagen: e.target.value })} />
                            </div>
                        </div>

                        <div className='field'>
                            <label className="label">Modelo</label>
                            <div className='control'>
                                <input className="input is-focused" type="text" value={equipo.modelo} onChange={(e) => setEquipo({ ...equipo, modelo: e.target.value })} />
                            </div>
                        </div>

                        <div className='field'>
                            <label className="label">Marca</label>
                            <div className='control'>
                                <input className="input is-focused" type="text" value={equipo.marca} onChange={(e) => setEquipo({ ...equipo, marca: e.target.value })} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Disponibilidad</label>
                            <div className="control">
                                 <div className="select">
                                    <select value={selectedOption} onChange={handleSelectChange}>
                                        <option value="">Seleccionar</option>
                                        {disponibilidades.map((disponibilidad) => (
                                            <option key={disponibilidad.disponibilidadId} value={disponibilidad.disponibilidadId}>{disponibilidad.nombre_disponibilidad}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <br />
                            <div class="field is-grouped">
                                <p class="control">
                                    <button class="button is-link is-outlined is-medium is-fullwidth" onClick={modificarEquipo}>Guardar</button>
                                </p>
                                <p class="control">
                                    <button class="button is-danger is-outlined is-medium is-fullwidth">Cancelar</button>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModificarEquipo;
