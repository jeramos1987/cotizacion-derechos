import React, { useState } from 'react'
import { Contact } from './Contact'
import { ConvertirDerechos } from './ConvertirDerechos'
import { GetTipoCambio } from './GetTipoCambio'


export const CalculadorDerechos = () => {

    const [tc, setTc] = useState(3.701)

    const handleTcChange = (e) => {
        setTc(e.target.value)
    }

    return (
        <div className="container1 box ">
            <Contact />
            
            {/* <div className="card is-justify-content-center is-align-items-center has-text-centered mt-1 message is-warning" >
            <h2 className="title m-1 is-4">Convertidor a Soles</h2>
            <p className="m-1 is-normal">Primero debe elegir el <strong>Tipo de Cambio</strong> y luego ingresar el importe en dolares</p>
            
            </div> */}
            <GetTipoCambio handleTcChange={handleTcChange} tc={tc}/>
            <ConvertirDerechos tc={tc}/>
            <Contact />

            {/* Interes */}
        </div>
    )
}
