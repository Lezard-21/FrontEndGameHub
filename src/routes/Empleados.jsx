import React from 'react'
import CardEmpleado from '../components/CardEmpleado'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const Empleados = () => {
    return (
        <div class="hero is-fullwidth">
            <section class="hero" >
                <NavBar />
            </section>
            <section class="has-text-right ">
                <Link to="/agregarEmpleado">
                    <a class="button is-success " href="#">
                        <span>Agregar empleado</span>
                    </a>
                </Link>
            </section>
            <div className='contenedor-juegos'>
                <div class="fixed-grid has-4-cols">
                    <div class="grid is-gap-5 ispad">
                        <CardEmpleado />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Empleados