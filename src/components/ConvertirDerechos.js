import React, { useEffect, useState } from 'react'

export const ConvertirDerechos = ({ tc }) => {


    const [advUsd, setAdvUsd] = useState(0)
    const [advPen, setAdvPen] = useState(0)
    const [igvUsd, setIgvUsd] = useState(0)
    const [igvPen, setIgvPen] = useState(0)
    const [ipmUsd, setIpmUsd] = useState(0)
    const [ipmPen, setIpmPen] = useState(0)
    const [iscUsd, setIscUsd] = useState(0)
    const [iscPen, setIscPen] = useState(0)
    const [antidUsd, setAntidUsd] = useState(0)
    const [antidPen, setAntidPen] = useState(0)
    const [totalUsd, setTotalUsd] = useState(0)
    const [totalPen, setTotalPen] = useState(0)
    const [diasInteres, setDiasInteres] = useState(0)
    const [interesUsd, setInteresUsd] = useState(0)
    const [interesPen, setInteresPen] = useState(0)
    const [percepcion, setPercepcion] = useState(0)
    const [totalGeneralPen, setTotalGeneralPen] = useState(0)

    const conceptos = [
        {
            id: "adv",
            nombre: "Ad Valorem",
            valorPen: advPen,
            valorUsd: advUsd,
        },
        {
            id: "igv",
            nombre: "IGV",
            valorPen: igvPen,
            valorUsd: igvUsd
        },
        {
            id: "ipm",
            nombre: "IPM",
            valorPen: ipmPen,
            valorUsd: ipmUsd
        },
        {
            id: "isc",
            nombre: "ISC",
            valorPen: iscPen,
            valorUsd: iscUsd
        },
        {
            id: "antid",
            nombre: "Anti dumping",
            valorPen: antidPen,
            valorUsd: antidUsd
        },

    ]



    const handleChangeAdvUsd = (e) => {
        switch (e.target.id) {
            case "adv":
                setAdvUsd(parseInt(e.target.value))
                break;

            case "igv":
                setIgvUsd(parseInt(e.target.value))
                break;

            case "ipm":
                setIpmUsd(parseInt(e.target.value))
                break;

            case "isc":
                setIscUsd(parseInt(e.target.value))
                break;

            case "diasInteres":
                setDiasInteres(parseInt(e.target.value))
                break;

            case "percepcion":
                setPercepcion(parseInt(e.target.value))
                break;

            default:
                setAntidUsd(parseInt(e.target.value))
                break;
        }


    }

    const cambiarSoles = () => {

        setTotalUsd(advUsd + igvUsd + ipmUsd + iscUsd + antidUsd)
        setInteresUsd((0.005 / 30) * totalUsd * diasInteres)
        setAdvPen(advUsd * tc)
        setIgvPen(igvUsd * tc)
        setIpmPen(ipmUsd * tc)
        setIscPen(iscUsd * tc)
        setAntidPen(antidUsd * tc)
        setTotalPen(totalUsd * tc)
        setInteresPen(Math.round(Math.round(interesUsd) * tc))
        setTotalGeneralPen(Math.round(totalPen) + interesPen + percepcion)
        console.log("Interes Soles: ", interesPen);

    }

    useEffect(() => {
        cambiarSoles()

    })

    const HandleReiniciar = () => {
        setAdvUsd(0)
        setIgvUsd(0)
        setIpmUsd(0)
        setIscUsd(0)
        setDiasInteres(0)
        setAntidUsd(0)
        setPercepcion(0)
    }


    return (

        <div>
            <div className="is-align-content-flex-end is-fullwidth">
                <button onClick={HandleReiniciar} className="button is-link is-fullwidth is-rounded">Clic para Limpiar</button>
            </div>
        <table className="table is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Concepto</th>
                    <th>Importe USD</th>
                    <th>Importe SOL</th>
                </tr>
            </thead>
            <tbody>

                {conceptos.map(item => {

                    return (
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>
                                {/* <input className="input is-focused" type="number" name="advUsd" id={item.id} value={item.valorUsd} onChange={handleChangeAdvUsd} /> */}
                                <div class="field">
                                    <p class="control has-icons-left">
                                        <input className="input is-focused is-small has-text-right" type="number" name="advUsd" id={item.id} value={item.valorUsd} onChange={handleChangeAdvUsd} />
                                        <span class="icon is-small is-left">
                                            <i>$</i>
                                        </span>
                                    </p>
                                </div>
                            </td>
                            <td>
                                {/* {`S/${parseInt(item.valorPen)}`} */}
                                <div class="field">
                                    <p class="control has-icons-left">
                                        <input className="input is-focused is-small has-text-right" value={parseInt(item.valorPen)} disabled />
                                        <span class="icon is-small is-left">
                                            <i>S/</i>
                                        </span>
                                    </p>
                                </div>

                            </td>
                        </tr>
                    )
                })
                }

            </tbody>
            <tfoot>
                <tr>
                    <th>
                        Derechos
                    </th>
                    <th className="has-text-right">
                        <span>${totalUsd}</span>
                    </th>
                    <th className="has-text-right">
                        {`S/${parseInt(totalPen)}`}
                    </th>
                </tr>
                <tr>
                    <td>Intereses</td>
                    <td>
                        {/* Dias:
                        <input className="input is-focused" type="number" name="diasInteres" id="diasInteres" value={diasInteres} onChange={handleChangeAdvUsd} /> */}
                        <div class="field">
                            <p class="control has-icons-left">
                                <input className="input is-focused is-small has-text-right" type="number" name="diasInteres" id="diasInteres" value={diasInteres} onChange={handleChangeAdvUsd} />
                                <span class="icon is-small is-left">
                                    <i>Dias</i>
                                </span>
                            </p>
                        </div>
                    </td>
                    <td className="has-text-right">

                        <span>{`S/${parseInt(interesPen)}`}</span>

                    </td>
                </tr>
                <tr>
                    <td>Percepcion</td>
                    <td>
                        {/* Dias:
                        <input className="input is-focused" type="number" name="diasInteres" id="diasInteres" value={diasInteres} onChange={handleChangeAdvUsd} /> */}
                        {/* <div class="field">
                            <p class="control has-icons-left">
                                <input className="input is-focused" type="number" name="diasInteres" id="diasInteres" value={diasInteres} onChange={handleChangeAdvUsd} />
                                <span class="icon is-small is-left">
                                    <i>Dias</i>
                                </span>
                            </p>
                        </div> */}
                    </td>
                    <td>

                        <div class="field">
                            <p class="control has-icons-left">
                                <input className="input is-focused is-small has-text-right" type="number" name="percepcion" id="percepcion" value={percepcion} onChange={handleChangeAdvUsd} />
                                <span class="icon is-small is-left">
                                    <i>S/</i>
                                </span>
                            </p>
                        </div>

                    </td>
                </tr>


                <tr>
                    <th>Total Derechos + Intereses + Percepcion</th>
                    <td>
                    </td>
                    <th className="has-text-right">
                        {`S/${parseInt(totalGeneralPen)}`}
                    </th>
                </tr>
            </tfoot>




        </table>
            
        </div>                    
    )
}
