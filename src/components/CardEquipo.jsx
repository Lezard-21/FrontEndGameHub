import React from 'react';

const CardEquipo = ({equipo}) => {

    const disponibilidadColor = equipo.disponibilidad.nombre_disponibilidad === 'Disponible' ? 'green' : 'red';

    return (
        <>
            <div class="cell is-one-fifth">
                <div class ="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img
                                src= {equipo.url_imagen !== 'N/A' ? equipo.url_imagen : 'https://bulma.io/images/placeholders/1280x960.png'}
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-5">{equipo.nombre}</p>
                                <p class="subtitle is-4" style={{color: disponibilidadColor}}>{equipo.disponibilidad.nombre_disponibilidad}</p>  
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Modificar</a>
                        <a href="#" class="card-footer-item">Eliminar</a>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default CardEquipo;