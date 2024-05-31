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

    const burgerHandler = () => {
        const navbarBurger = document.getElementById("navBurger")
        navbarBurger.classList.toggle("is-active")
        const navbarMenu = document.getElementById("navbarExample")
        navbarMenu.classList.toggle("is-active")
    }

    return (
        <nav className="navbar nav_bar is-transparent">

            <div className="navbar-brand">
                <Link to="/">
                    <Logo />
                </Link>

                <div id='navBurger' className="navbar-burger" data-target="navbarExampleTransparentExample" onClick={() => burgerHandler()}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>
            <div id="navbarExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <Link to="/login">
                                <button className="button is-primary has-background-link-light">
                                    <span>Iniciar sesión</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBarLogin