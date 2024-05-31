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
import ModificarEquipo from '../pages/ModificarEquipo'
import AgregarEquipo from '../pages/AgregarEquipo'
import NotFound from '../pages/NotFound'
import ListaEmpleados from '../pages/ListaEmpleados'
import AgregarEmpleado from '../pages/AgregarEmpleado'
import EditarEmpleado from '../pages/EditarEmpleado'
import ProtectedRoute from '../components/ProtectedRoute'
import ProtectedByRol from '../components/ProtectedByRol'
import ProtectedByToken from '../components/ProtectedByToken'
// import Login from '../pages/Login'

const Router = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}> */}
      <Route path='/' element={<ProtectedByToken><CleanLayout /></ProtectedByToken>}>
        <Route index element={<Principal />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound/>} />
      </Route>
      <Route path='/autenticated' element={<ProtectedRoute><HomeLayout/></ProtectedRoute>}>
        <Route index element={<Home/>} />
        <Route path='/autenticated/equipos' element={<ListaEquipo />} />
        <Route path='/autenticated/equipos/modificar/*' element={<ModificarEquipo />} />
        <Route path='/autenticated/equipos/agregar' element={<AgregarEquipo />} />
        <Route path='/autenticated/juegos' element={<ListaVideojuegos />} />
        <Route path='/autenticated/juegos/modificar/*' element={<h1>Modificar juegos</h1>} />
        <Route path='/autenticated/juegos/agregar/' element={<h1>Agregar juegos</h1>} />
        <Route path='/autenticated/empleados' element={<ProtectedByRol><ListaEmpleados /></ProtectedByRol>} />
        <Route path='/autenticated/empleados/agregar' element={<ProtectedByRol><AgregarEmpleado /></ProtectedByRol>} />
        <Route path='/autenticated/empleados/modificar/*' element={<ProtectedByRol><EditarEmpleado /></ProtectedByRol>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default Router
