// import { Grid } from "@mui/material"

// const ProyectosCreados = () => {
//     return (
//         <Grid>
//             ProyectosCreados
//         </Grid>
//     )
// }
// export default ProyectosCreados
import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'Proyecto 1',
            description: 'Descripción del Proyecto 1',
            image: 'ruta/a/imagen1.jpg',
            link: 'https://www.ejemplo.com/proyecto1'
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción del Proyecto 2',
            image: 'ruta/a/imagen2.jpg',
            link: 'https://www.ejemplo.com/proyecto2'
        },
        {
            title: 'Proyecto 3',
            description: 'Descripción del Proyecto 3',
            image: 'ruta/a/imagen3.jpg',
            link: 'https://www.ejemplo.com/proyecto3'
        }
    ];

    return (
        <div>
            <h2>Proyectos</h2>
            <div className="projects-container">
                {projects.map(project => (
                    <div key={project.title} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>Ver Proyecto</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
