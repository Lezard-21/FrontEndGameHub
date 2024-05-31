import React from 'react'
import Logo from './Logo'

import { useAuth } from '../auth/AuthContext.jsx';
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { removeTokenLocalStorage } from '../utils/localStorage.js';

const NavBar = () => {
    const navigate = useNavigate()

    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth()

    const cerrarSesion = () => {
        setIsLoggedIn(false)
        setAuthUser(null)
        removeTokenLocalStorage('token')
        navigate("/login")
    }
    const burgerHandler = () => {
        const navbarBurger = document.getElementById("navBurger")
        navbarBurger.classList.toggle("is-active")
        const navbarMenu = document.getElementById("navbarBasicExample")
        navbarMenu.classList.toggle("is-active")
    }

    return (
        <nav className="navbar nav_bar is-transparent">
            
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
                    <Link to="/autenticated" className="navbar-item">
                        Home
                    </Link>
                    <Link to="/autenticated/equipos" className="navbar-item">
                        Equipos
                    </Link>
                    <Link to="/autenticated/juegos" className="navbar-item">
                        Juegos
                    </Link>
                    <Link to="/autenticated/empleados" className="navbar-item">
                        Empleados
                    </Link>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    {/* <Link to="/videojuegos" class="navbar-item has-text-white has-text-link-light  ">Videojuegos </Link> */}
                    {/* <a class="navbar-item has-text-white has-text-link-light  " href="#"> Videojuegos </a> */}

                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">

                                <Link to="/login">
                                    <a className="button is-primary has-background-link-light" onClick={cerrarSesion}>
                                        <span>Cerrar sesión</span>
                                    </a>
                                </Link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar