import React from 'react'
import NavBar from '../components/NavBar'
import CardVideojuego from '../components/CardVideojuego'

import { useAuth } from '../auth/AuthContext.jsx';

const ListaVideojuegos = () => {

    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth()



    return (

        <div class="hero is-fullwidth">
            <section class="hero " >
                <NavBar />
            </section>
            <section class="hero " >
                {isLoggedIn ? (<p class="has-text-white">Bienvenido: {authUser.username}</p>):(<p class="has-text-white">no hay nada</p>)}
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