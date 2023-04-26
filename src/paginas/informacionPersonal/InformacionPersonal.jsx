// import { Grid } from "@mui/material"

// const InformacionPersonal = () => {
//     return (
//         <Grid>
//             InformacionPersonal
//         </Grid>
//     )
// }
// export default InformacionPersonal
import styles from "../../Styles/InformacionPersonal.module.css"
import React from 'react';

function InformacionPersonal() {
    return (
        <div className={styles.container} >
            <h1>Nombre del autor</h1>
            <p>Descripción breve del autor</p>
            <ul className={styles.ul} >
                <li>Teléfono: 1234567890</li>
                <li>Email: example@example.com</li>
                <li>Sitio web: www.example.com</li>
            </ul>
        </div>
    );
}

export default InformacionPersonal;

