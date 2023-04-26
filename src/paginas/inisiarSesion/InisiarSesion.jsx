import { Grid } from "@mui/material";
import Boton from "../../components/boton/Boton";
const InisiarSesion = () => {
    return (
        <Grid container>
            
        <Boton></Boton>
             
        </Grid>
    )
}
export default InisiarSesion 

// import { TextField, Button } from '@mui/material';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (event) => setEmail(event.target.value);
//     const handlePasswordChange = (event) => setPassword(event.target.value);

//     const handleLogin = (event) => {
//         event.preventDefault();
//         // Aquí puedes agregar la lógica para iniciar sesión
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <TextField label="Correo electrónico" type="email" value={email} onChange={handleEmailChange} />
//             <TextField label="Contraseña" type="password" value={password} onChange={handlePasswordChange} />
//             <Button variant="contained" color="primary" type="submit">Iniciar sesión</Button>
//         </form>
//     );
// }
