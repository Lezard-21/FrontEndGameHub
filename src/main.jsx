import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login.jsx';
import ListaVideoJuegos from './pages/ListaVideojuegos.jsx';
import Home from './pages/Home.jsx';
import './root.css'
import ListaEquipo from './pages/ListaEquipo.jsx'
import FormularioEquipo from './pages/FormularioEquipo.jsx';

// Definición de rutas
const router = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/videojuegos",
    element: <ListaVideoJuegos />
  },{
    path: "/equipos",
    element: <ListaEquipo />
  },{
    path: "/equipos/modificar/:id",
    element: <FormularioEquipo />
  },{
    path: "/home",
    element: <Home />
  },{
    path: "/empleados",
    element: <Empleados />
  },{
    path: "/agregarEmpleado",
    element: <AgregarEmpleado />
  } ,
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider> */}
    <App></App>
  </React.StrictMode>
);
