// import { Grid } from "@mui/material"

// const RedesSociales = () => {
//     return (
//         <Grid>
//             redes sociales
//         </Grid>
//     )
//  }
//     export default RedesSociales
import React from 'react';

function SocialMedia() {
    const socialMedia = [
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/tu_perfil_de_LinkedIn',
            icon: 'ruta/a/icono_linkedin.svg'
        },
        {
            name: 'GitHub',
            link: 'https://github.com/tu_usuario_de_GitHub',
            icon: 'ruta/a/icono_github.svg'
        }
    ];

    return (
        <div>
            <h2>Redes Sociales</h2>
            <div className="social-media-container">
                {socialMedia.map(media => (
                    <a key={media.name} href={media.link} target="_blank" rel="noopener noreferrer">
                        <img src={media.icon} alt={media.name} />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default SocialMedia;
