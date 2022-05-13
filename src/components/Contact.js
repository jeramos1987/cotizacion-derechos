import React from 'react'

export const Contact = () => {
    return (
        <div className="card is-justify-content-center is-align-items-center has-text-centered mt-2 message is-success" >
            <h2 className="title m-2">Publique su empresa aqui!!!</h2>
            <p className="m-2">Comuniquese al siguiente email.</p>
            <p className="m-2 has-text-link">ventas.aduanas@outlook.com</p>
           
            <a href="mailto:ventas.aduanas@outlook.com?subject=SOLICITO%20PUBLICAR%20MI%20EMPRESA&body=Estimados%2C%0A%0ASolicito%20publicar%20mi%20empresa%20en%20el%20calculadoraduanero.com%0A%0ASaludos." className="button is-success m-2">Enviar un Email</a>
            
        </div>
    )
}
