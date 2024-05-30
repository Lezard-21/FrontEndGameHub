import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './routes/Login';
import ListaVideoJuegos from './routes/ListaVideojuegos';
import Home from './routes/Home.jsx';
import './root.css'
import ListaEquipo from './routes/ListaEquipo.jsx'
import { AuthProvider } from './auth/AuthContext';
import FormularioEquipo from './routes/FormularioEquipo.jsx';

// Definición de rutas
const router = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
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
  }    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>
);
