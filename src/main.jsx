import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './routes/Login';
import ListaVideoJuegos from './routes/ListaVideojuegos.jsx';
import './root.css'

import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';

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
    element: <ProtectedRoute element={<ListaVideoJuegos />} />
        
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>
);
