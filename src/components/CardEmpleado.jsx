import React from 'react'

const CardEmpleado = () => {
    return (
        <div class="cell isone">
            <div class="card">
                <div class="card-image">
                    <figure class="image ">
                        <img
                            src="./src/assets/User.jpeg"
                            alt="imagen de perfil"
                            class="is-rounded"
                        />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-5">Nombre del usuario</p>
                            <p class="subtitle is-5">Rol</p>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Ver Info.</a>
                        <a href="#" className="card-footer-item">Modificar</a>
                        <a href="#" className="card-footer-item">Eliminar</a>
                    </footer>

                </div>
            </div>
        </div>
    )
}

export default CardEmpleado