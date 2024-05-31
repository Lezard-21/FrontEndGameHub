import { Routes, Route } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
// import ProtectedRoute from '../components/ProtectedRoute'
// import NotFound from '../pages/NotFound'
import Principal from '../pages/Principal'
import Login from '../pages/Login'
// import AccesoDenegado from '../components/AccesoDenegado'
import CleanLayout from '../layouts/CleanLayout'
// import ListaEquipo from './ListaEquipo'
import Home from '../pages/Home'
import ListaEquipo from '../pages/ListaEquipo'
import ListaVideojuegos from '../pages/ListaVideojuegos'
import FormularioEquipo from '../pages/FormularioEquipo'
import NotFound from '../pages/NotFound'
<<<<<<< HEAD
import ListaEmpleados from '../pages/ListaEmpleados'
import AgregarEmpleado from '../pages/AgregarEmpleado'
import EditarEmpleado from '../pages/EditarEmpleado'
=======
import ProtectedRoute from '../components/ProtectedRoute'
>>>>>>> c9fbec22d16fab0345c712a3d57810eaf48bd122
// import Login from '../pages/Login'

const Router = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}> */}
      <Route path='/' element={<CleanLayout />}>
        <Route index element={<Principal />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound/>} />
      </Route>
      <Route path='/autenticated' element={<ProtectedRoute><HomeLayout/></ProtectedRoute>}>
        <Route index element={<Home/>} />
        <Route path='/autenticated/equipos' element={<ListaEquipo />} />
        <Route path='/autenticated/equipos/modificar/*' element={<FormularioEquipo />} />
        <Route path='/autenticated/equipos/agregar/' element={<h1>Agregar equipos</h1>} />
        <Route path='/autenticated/juegos' element={<ListaVideojuegos />} />
        <Route path='/autenticated/juegos/modificar/*' element={<h1>Modificar juegos</h1>} />
        <Route path='/autenticated/juegos/agregar/' element={<h1>Agregar juegos</h1>} />
        <Route path='/autenticated/empleados' element={<ListaEmpleados />} />
        <Route path='/autenticated/empleados/agregar' element={<AgregarEmpleado />} />
        <Route path='/autenticated/empleados/modificar/*' element={<EditarEmpleado />} />
        <Route path='/autenticated/usuarios/empleados/*' element={<h1>Modificar Empleados</h1>} />
        <Route path='/autenticated/usuarios/empleados/' element={<h1>Eliminar Empleados</h1>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default Router
