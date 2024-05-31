import { useNavigate } from 'react-router-dom';

const AccesoCerrarSesion = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/autenticated');
    };

    return (
        <div className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1">Cierra sesión primero</h1>
                    <p className="subtitle is-3">Tienes que cerrar sesión para poder logearte de nuevo.</p>
                    <button className="button is-link" onClick={handleLoginRedirect}>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccesoCerrarSesion;
