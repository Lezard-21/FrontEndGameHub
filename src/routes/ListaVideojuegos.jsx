import React from 'react'
import NavBar from '../components/NavBar'
import CardVideojuego from '../components/CardVideojuego'

const ListaVideojuegos = () => {
    return (

        <div class="hero is-fullwidth">
            <section class="hero " >
                <NavBar />
            </section>
           <div  className='contenedor-juegos'>
           <div class="fixed-grid has-4-cols">
            <div class="grid is-gap-5 ispad">
                <CardVideojuego />
                <CardVideojuego />
                <CardVideojuego />
                <CardVideojuego />
                <CardVideojuego />

                <CardVideojuego />
                <CardVideojuego />
                <CardVideojuego />

                <CardVideojuego />
                
                <CardVideojuego />
            </div>
            </div>
           </div>
            
        </div>
    )
}

export default ListaVideojuegos