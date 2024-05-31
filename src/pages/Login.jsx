import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import { Toaster, toast } from 'sonner'
import { API_URL } from '../App.jsx';
import  {useAuth}  from '../auth/AuthContext.jsx';
import { setTokenLocalStorage } from '../utils/localStorage.js';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const {
    authUser, 
    setAuthUser,
    isLoggedIn, 
    setIsLoggedIn
  } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/auth`, {
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
        setTokenLocalStorage('token', data.token)
        setIsLoggedIn(true)
        setAuthUser({
          username: data.userName,
          rol: data.rol,
          token: data.token
        })
        navigate('/autenticated'); // Redirige a la vista Home
      } else {
        console.error('Login failed');
        toast.error('Verifica tus datos e intentalo de nuevo');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
    
  };

  return (
    
    <div className="canva">
      
      <img className='fondo' src='./src/assets/juegos2.jpg' alt="fondo" />
      <section className="hero is-fullheight">
        <Toaster position="top-center" expand={false} richColors  />
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form onSubmit={handleSubmit} className="box">
                  <h2 className="title is-2"><Logo /></h2>
                  <div className="field">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        type="text"
                        id="username"
                        placeholder="Usuario"
                        className="input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                  
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field has-text-right">
                    <button type="submit" className="button is-success has-background-link-light">
                      Iniciar sesión
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