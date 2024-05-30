import React from 'react'
import Logo from './Logo'

import { useAuth } from '../auth/AuthContext.jsx';
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';

const NavBarLogin = () => {
    const navigate = useNavigate()

    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth()

    const cerrarSesion = () => {
        isLoggedIn(false)
        setAuthUser(null)
        navigate("/login")
    }
    const burgerHandler = () => {
        const navbarBurger = document.getElementById("navBurger")
        navbarBurger.classList.toggle("is-active")
        const navbarMenu = document.getElementById("navbarBasicExample")
        navbarMenu.classList.toggle("is-active")
    }

    return (
        <nav className="navbar is-transparent">
            
            <div className="navbar-brand">
                <Link to="/">
                    <Logo />
                </Link>

                <div id='navBurger' className="navbar-burger js-burger" data-target="navbarExampleTransparentExample" onClick={() => burgerHandler()}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                </div>
            </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            {isLoggedIn ? (
                                <Link to="/login">
                                    <button type="button" className="button is-white" onClick={cerrarSesion}>Cerrar sesion</button>
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <a className="button is-primary has-background-link-light" href="#">
                                        <span>Iniciar Sesion</span>
                                    </a>
                                </Link>
                            )}

                        </div>
                    </div>
                </div>
        </nav>
    )
}

export default NavBarLogin