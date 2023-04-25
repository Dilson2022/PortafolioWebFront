import { Grid } from "@mui/material";
import Contact from "./paginas/contact/Contact";
import InformacionPersonal from "./paginas/informacionPersonal/InformacionPersonal";
import InisiarSesion from "./paginas/inisiarSesion/InisiarSesion";
import ProyectosCreados from "./proyectosCreados/ProyectosCreados";
import RedesSociales from "./redesSociales/RedesSociales";
import Tecnologias from "./tecnologias/Tecnologias";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import SolicitudesResividas from "./solicitudesResividas/SolicitudesResividas";

const App = () => {

  const [isAllowed, setIsAllowed] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/PaginasPrincipal'} />}></Route>
        <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
          <Route path="/solicitudesResividas" element={<SolicitudesResividas />}></Route>

        </Route>
        <Route path="/inisiarSesion" element={<InisiarSesion setIsAllowed={setIsAllowed} />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/informacionPersonal" element={<InformacionPersonal />}></Route>
        <Route path="/proyectosCreados" element={<ProyectosCreados />}></Route>
        <Route path="/redesSociales" element={<RedesSociales />}></Route>
        <Route path="/tecnologias" element={<Tecnologias />}></Route>
        
        </Routes>
    </BrowserRouter>
  )
}
export default App