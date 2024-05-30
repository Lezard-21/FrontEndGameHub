import { Routes, Route } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
// import ProtectedRoute from '../components/ProtectedRoute'
// import NotFound from '../pages/NotFound'
import Principal from '../pages/Principal'
import Login from '../pages/Login'
import AccesoDenegado from '../components/AccesoDenegado'
import CleanLayout from '../layouts/CleanLayout'
// import ListaEquipo from './ListaEquipo'
import Home from '../pages/Home'
import ListaEquipo from '../pages/ListaEquipo'
import ListaVideojuegos from '../pages/ListaVideojuegos'
import FormularioEquipo from '../pages/FormularioEquipo'
// import Login from '../pages/Login'

const Router = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}> */}
      <Route path='/' element={<CleanLayout />}>
        <Route index element={<Principal />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<AccesoDenegado/>} />
      </Route>
      <Route path='/autenticated' element={<HomeLayout/>}>
        <Route index element={<Home/>} />
        <Route path='/autenticated/equipos' element={<ListaEquipo />} />
        <Route path='/autenticated/equipos/modificar/*' element={<FormularioEquipo />} />
        <Route path='/autenticated/juegos' element={<ListaVideojuegos />} />
        <Route path='*' element={<AccesoDenegado/>} />
      </Route>
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path='/register' element={<Register />} /> */}
    </Routes>
  )
}

export default Router
