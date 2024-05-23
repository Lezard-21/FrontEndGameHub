import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ListaVideoJuegos from './routes/ListaVideojuegos.jsx'
import Login from './routes/Login.jsx'
import  './root.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/login",
    element: <Login />
  },{
    path: "/videojuegos",
    element: <ListaVideoJuegos />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
