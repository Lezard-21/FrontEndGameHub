import React from 'react'

const CardVideojuego = () => {
    return (
        <div class="cell is-one-fifth">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img
                            src="https://bulma.io/assets/images/placeholders/1280x960.png"
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        
                        <div class="media-content">
                            <p class="title is-4">Nombre del juego</p>
                            <p class="subtitle is-6">Desarrolladora</p>
                        </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                        iaculis mauris.  
                        <br />
                        <div class="has-text-right">
                        <p >2016</p>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardVideojuego