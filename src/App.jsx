import { useState } from 'react'
import { Link } from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import Logo from './components/Logo.jsx'

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
              Game Hub la empresa de gestion de videojuegos #1
              </h2>
              <p class="subtitle is-5">Ubica nuestras oficinas</p>
              <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13562821.244935999!2d-137.09368265!3d33.909334000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcc9e4bb820395%3A0x9c29b96a3f9bf1c7!2sGame%20Hub!5e0!3m2!1ses!2smx!4v1716433476692!5m2!1ses!2smx" width="500" height="350" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
1
export default App
