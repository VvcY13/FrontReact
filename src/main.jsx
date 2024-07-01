import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Componentes/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componentes/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Productos from './Componentes/Productos/Productos.jsx';
import ClienteDashboard from './Componentes/Cliente/ClienteDashboard.jsx';
import AdministradorDashboard from './Componentes/Administrador/AdministradorDashboard.jsx';
import ClientePerfil from './Componentes/Cliente/ClientePerfil.jsx';
import ClienteProductos from './Componentes/Cliente/ClienteProductos.jsx';
import ClienteCompras from './Componentes/Cliente/ClienteCompras.jsx';
import ClienteCarrito from './Componentes/Cliente/ClienteCarrito.jsx';
import { AuthProvider } from './Componentes/Contexto/AuthContext.jsx';
import ClientePromociones from './Componentes/Cliente/ClientePromociones.jsx';
import AdministradorHome from './Componentes/Administrador/AdministradorHome.jsx';
import AdministradorPerfil from './Componentes/Administrador/AdministradorPerfil.jsx';
import AdministradorPersonal from './Componentes/Administrador/AdministradorPersonal.jsx';
import AdministradorVentas from './Componentes/Administrador/AdministradorVentas.jsx';
import AdministradorQuejas from './Componentes/Administrador/AdministradorQuejas.jsx';
import AdministradorProductos from './Componentes/Administrador/AdministradorProductos.jsx';
import ClienteQuejas from './Componentes/Cliente/ClienteQuejas.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/cliente" element={<ClienteDashboard />} />
        <Route path="/administrador" element={<AdministradorDashboard />} />
        <Route path="/clientePerfil" element={<ClientePerfil />}/>
        <Route path="/clienteProductos" element={<ClienteProductos />}/>
        <Route path="/clienteCompras" element={<ClienteCompras />}/>
        <Route path="/clienteCarrito" element={<ClienteCarrito />}/>
        <Route path="/clientePromociones" element={<ClientePromociones />}/>
        <Route path='/clienteQuejas' element={<ClienteQuejas/>}/>
        <Route path="/administradorHome" element={<AdministradorHome/>}/>
        <Route path="/administradorProductos" element={<AdministradorProductos/>}/>
        <Route path="/administradorPerfil" element={<AdministradorPerfil/>}/>
        <Route path="/administradorPersonal" element={<AdministradorPersonal/>}/>
        <Route path="/administradorVentas" element={<AdministradorVentas/>}/>
        <Route path="/administradorQuejasyReclamos" element={<AdministradorQuejas/>}/>
      </Routes>
      </AuthProvider>
      </Router>
     
  </React.StrictMode>
);