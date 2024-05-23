import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Logo from '../components/Logo.jsx';

const API_URL = 'http://localhost:3000/api/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      console.log("Response received:", response);
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        navigate('/videojuegos'); // Redirige a la vista Home
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="canva">
      <img className='fondo' src='./src/assets/juegos2.jpg' alt="fondo" />
      <section className="hero is-fullheight">
        <NavBar />
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form onSubmit={handleSubmit} className="box">
                  <h2 className="title is-2"><Logo /></h2>
                  <div className="field">
                    <label htmlFor="username" className="label">Nombre de usuario</label>
                    <div className="control has-icons-left">
                      <input
                        type="text"
                        id="username"
                        placeholder="ejm. bobsmith"
                        className="input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="password" className="label">Contraseña</label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        id="password"
                        placeholder="*******"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field has-text-right">
                    <button type="submit" className="button is-success has-background-link-light">
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
  );
};

export default Login;