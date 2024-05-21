import React from 'react'
import Logo from './Logo'

import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <Link to="/">
                    <Logo />
                </Link>
               
                <div class="navbar-burger js-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <Link to="/videojuegos" class="navbar-item has-text-white has-text-link-light  ">Videojuegos </Link>
                    {/* <a class="navbar-item has-text-white has-text-link-light  " href="#"> Videojuegos </a> */}

                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <Link to="/login">
                                    <a class="button is-primary has-background-link-light" href="#">
                                        <span>Iniciar Sesion</span>
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar