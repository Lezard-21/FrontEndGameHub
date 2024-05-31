import { useEffect, useState } from 'react';
import { URL_API } from '../constants/Constants.js';
import { getTokenLocalStorage } from '../utils/localStorage.js';
import { Link } from 'react-router-dom';

const AgregarEquipo = () => {
    
    const [nombre, setNombre] = useState("");
    const [url_imagen, setUrlImagen] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [disponibilidades, setDisponibilidades] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    
    
    const buscarDisponibilidad = async (e) => {
        if (e) e.preventDefault();

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

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const registrarEquipo = async (e) => {
        if (e) e.preventDefault();

        try{
            const response = await fetch(`${URL_API}/equipos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getTokenLocalStorage('token')}`
                },
                body: JSON.stringify({
                    nombre,
                    url_imagen,
                    marca,
                    modelo,
                    disponibilidadId:selectedOption
                })
            });

            
            if (response.ok) {
                alert('Equipo agregado correctamente');
                setNombre('');
                setUrlImagen('');
                setMarca('');
                setModelo('');
                setSelectedOption('');
            }else{
                alert('Error al registrar el equipo');
            }


        }catch(error){
            console.error('Error occurred:', error);
        }

    }

    useEffect(() => {
            buscarDisponibilidad();
    }, []);


    return (
        <>
            <div className="hero is-fullwidth">
                <div className='contenedor-juegos'>
                    <div className="fixed-grid has-4-cols">
                        <p className="title is-2">Agregar Equipo</p>
                        <div className='field'>
                            <label className="label">Nombre</label>
                            <div className='control'>
                                <input className="input is-focused" type="text" placeholder='Dell XPS' value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                            </div>
                        </div>

                        <div className='field'>
                            <label className="label">Imagen</label>
                            <div className='control'>
                                <input className="input is-focused" type="text" placeholder='https://dell.com' value={url_imagen} onChange={(e) => setUrlImagen(e.target.value)}/>
                            </div>
                        </div>

                        <div className='field'>
                            <label className="label">Modelo</label>
                            <div className='control'>
                                <input className="input is-focused" type="text" placeholder='XPS' value={modelo} onChange={(e) => setModelo(e.target.value)} />
                            </div>
                        </div>

                        <div className='field'>
                            <label className="label">Marca</label>
                            <div className='control'>
                                <input className="input is-focused" type="text" placeholder='Dell' value={marca} onChange={(e) => setMarca(e.target.value)} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Disponibilidad</label>
                            <div className="control">
                                 <div className="select">
                                    <div className="is-facused">
                                        <select value={selectedOption} onChange={handleSelectChange}>
                                            <option value="">Seleccionar</option>
                                            {disponibilidades.map((disponibilidad) => (
                                                <option key={disponibilidad.disponibilidadId} value={disponibilidad.disponibilidadId}>{disponibilidad.nombre_disponibilidad}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <br />
                            <div className="field is-grouped">
                                <p className="control">
                                    <button className="button is-link is-outlined is-medium is-fullwidth" onClick={registrarEquipo}>Guardar</button>
                                </p>
                                <Link to='/autenticated/equipos'>
                                <p className="control">
                                    <button className="button is-danger is-outlined is-medium is-fullwidth">Cancelar</button>
                                </p>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default AgregarEquipo;