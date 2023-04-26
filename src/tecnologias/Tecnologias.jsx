// import { Grid } from "@mui/material"

// const Tecnologias = () => {
//     return (
//         <Grid>
//             Tecnologias
//         </Grid>
//     )
// }
// export default Tecnologias
import React from 'react';

function Technologies() {
    const technologies = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express'];

    return (
        <div>
            <h2>Tecnologías</h2>
            <ul>
                {technologies.map(technology => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>
        </div>
    );
}

export default Technologies;
