import React from 'react'

const CardVideojuego = () => {
    return (
        <div className="cell is-one-fifth">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            src="https://bulma.io/assets/images/placeholders/1280x960.png"
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        
                        <div className="media-content">
                            <p className="title is-4">Nombre del juego</p>
                            <p className="subtitle is-6">Desarrolladora</p>
                        </div>
                    </div>

                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                        iaculis mauris.  
                        <br />
                        <div className="has-text-right">
                        <p >2016</p>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardVideojuego