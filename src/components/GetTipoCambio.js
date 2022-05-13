import React from 'react'

export const GetTipoCambio = ({ handleTcChange, tc }) => {

    return (
        // <div className="label is-horizontal">

        //     <label htmlFor="tc" className="label">TC: </label>
        //     <input type="number" id="tc" onChange={handleTcChange} step="0.001" value={tc} className="input"/>
        //     <a href="https://ww3.sunat.gob.pe/cl-ad-ittipocambioconsulta/TipoCambioS01Alias?accion=consultarTipoCambio" target="_blank" rel="noreferrer"> Tipo de cambio</a>

        // </div>

        <div className="box">
            
                    <label htmlFor="tc" className="label is-normal">Tipo de Cambio <a href="https://ww3.sunat.gob.pe/cl-ad-ittipocambioconsulta/TipoCambioS01Alias?accion=consultarTipoCambio" target='_blank' rel="noreferrer"> Buscar en Sunat</a></label>
                   
                    <input type="number" id="tc" onChange={handleTcChange} step="0.001" value={tc} className="input is-2 is-focused is-success"/>
             
                
                
                    
        </div>


    )
}
