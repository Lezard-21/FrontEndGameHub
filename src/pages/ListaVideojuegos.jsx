import NavBar from '../components/NavBar.jsx'
import CardVideojuego from '../components/CardVideojuego.jsx'
import AccesoDenegado from '../components/AccesoDenegado.jsx';

import { useAuth } from '../auth/AuthContext.jsx';

const ListaVideojuegos = () => {

    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth()

    if (!isLoggedIn) {
        
        return <AccesoDenegado />;
    }

    return (

        <div className="hero is-fullwidth">
            {/* <section className="hero " >
                {isLoggedIn ? (<p className="has-text-white">Bienvenido: {authUser.username}</p>):(<p className="has-text-white">no hay nada</p>)}
            </section> */}
           
           <div  className='contenedor-juegos'>
           <div className="fixed-grid has-4-cols">
           
            <div className="grid is-gap-5 ispad">
           
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