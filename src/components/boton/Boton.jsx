import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const Boton = ()=> {
    return (
        <Grid container>
            <Link to="/InisioSesion" style={{ marginLeft: '40px', borderRadius: '5px' }}>Inisio Sesion</Link>
            <Link to="/InformacionPersonal" style={{ marginLeft: '40px', borderRadius: '5px' }}>Informacion Personal</Link>
            <Link to="/ProyectosCreados" style={{ marginLeft: '40px', borderRadius: '5px' }}>Proyectos Creados</Link>
            <Link to="/RedesSociales" style={{ marginLeft: '40px', borderRadius: '5px' }}>Redes Sociales</Link>
            <Link to="/Tecnologias" style={{ marginLeft: '40px', borderRadius: '5px' }}>Tecnologias</Link>
            <Link to="/SolicitudesResividas" style={{ marginLeft: '40px', borderRadius: '5px' }}>Solicituedes Resividas</Link>
            <Link to="/Contact" style={{ marginLeft: '40px', borderRadius: '5px' }}>Contact</Link>
        </Grid>
    )
}

export default Boton