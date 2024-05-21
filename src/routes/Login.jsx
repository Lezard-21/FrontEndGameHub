import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Logo from '../components/Logo.jsx'

const Login = () => {
  return (
    <div className="canva" >
      <img className='fondo' src='./src/assets/juegos2.jpg' alt="fondo" />
      <section class="hero is-fullheight" >
        <NavBar />
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" class="box">
                  <h2 class="title is-2"><Logo /></h2>
                  <div class="field">
                    <label for="" class="label">Correo electronico</label>
                    <div class="control has-icons-left">
                      <input type="email" placeholder="ejm. bobsmith@gmail.com" class="input" required />
                      <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label htmlFor="" class="label">Contraseña</label>
                    <div class="control has-icons-left">
                      <input type="password" placeholder="*******" class="input" required />
                      <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                 
                  <div class="field has-text-right ">
                    <button class="button is-success has-background-link-light">
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  )
}

export default Login