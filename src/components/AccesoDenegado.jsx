import { useNavigate } from 'react-router-dom';

const AccesoDenegado = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1">Acceso denegado</h1>
                    <p className="subtitle is-3">No tienes autorización para ver esta página.</p>
                    <button className="button is-link" onClick={handleLoginRedirect}>
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccesoDenegado;
