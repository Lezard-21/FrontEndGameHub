import { useState } from 'react'
import { Link } from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import Logo from './components/Logo.jsx'

const API_URL = 'http://localhost:3000/api';

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="canva" >
        <img className='fondo' src='./src/assets/juegos2.jpg' alt="fondo" />
        <div class="hero is-fullheight" >
          <NavBar />
          <div class="container">
            <section class="section  has-text-centered is-info">
              <h1 class="title is-1"><Logo /></h1>
              <h2 class="subtitle is-3 has-text-white">
              En Game Hub, nos apasionan los videojuegos tanto como a ti. 
              <p class="subtitle is-5  ">Aquí encontrarás las últimas noticias, análisis detallados, y reseñas de los títulos más esperados y de los clásicos que han dejado huella en la historia del gaming. Nuestro equipo de expertos está dedicado a traerte contenido de calidad, desde las novedades más candentes hasta guías y trucos que te ayudarán a dominar tus juegos favoritos.</p>
              </h2>
              <a href="#" class="bd-tw-button button is-large ">Explorar</a>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
export { API_URL }