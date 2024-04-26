import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
            <div class="field">
              <label for="" class="label">Correo</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required />
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
            <div class="field">
              <label htmlFor="remember" class="checkbox">
                <input type="checkbox" id='remember' />
               Remember me
              </label>
            </div>
            <div class="field">
              <button class="button is-success">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default App
