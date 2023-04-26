// import { Grid } from "@mui/material"

// const Registro = () => {
//     return (
//         <Grid>
//             Registro
//         </Grid>
//     )
// }
// export default Registro
import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [request, setRequest] = useState('');
    const [comment, setComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario de contacto
    }

    return (
        <div>
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Correo:</label>
                    <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="phone">Teléfono/Celular:</label>
                    <input type="tel" id="phone" value={phone} onChange={event => setPhone(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="request">Solicitud:</label>
                    <input type="text" id="request" value={request} onChange={event => setRequest(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="comment">Comentario:</label>
                    <textarea id="comment" value={comment} onChange={event => setComment(event.target.value)} />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;
