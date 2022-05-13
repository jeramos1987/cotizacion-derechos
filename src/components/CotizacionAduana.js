import React, { useState } from "react";


import InputForm from "./FormCif";
import { Contact } from "./Contact";

const CotizacionAduana = () => {
  return (
    <div className="container1 box">
     
      <Contenido />
      {/* <Resultado /> */}
    </div>
  );
};

const Contenido = () => {
  const [valorFob, setValorFob] = useState("");
  const [valorFlete, setValorFlete] = useState(0);
  const [valorSeguro, setValorSeguro] = useState(0);
  const [tasaAdv, setTasaAdv] = useState(0.06);
  const [tasaPerc, setTasaPerc] = useState(0.035);

  const cambiarFob = (event) => {
    setValorFob(event.target.value);
  };

  const cambiarFlete = (event) => {
    setValorFlete(event.target.value);
  };

  const cambiarSeguro = (event) => {
    setValorSeguro(event.target.value);
  };

  const cambiarTasaAdv = (event) => {
    setTasaAdv(event.target.value);
  };

  const cambiarTasaPerc = (event) => {
    setTasaPerc(event.target.value);
  };

  // Calculos matematicos

  const valorCif = () => {
    return (
      parseFloat(valorFob) + parseFloat(valorFlete) + parseFloat(valorSeguro)
    );
  };

  const valorAdval = () => {
    return valorCif() * tasaAdv;
  };

  const valorIgv = () => {
    return (valorCif() + valorAdval()) * 0.16;
  };

  const valorIpm = () => {
    return (valorCif() + valorAdval()) * 0.02;
  };

  const valorPercepcion = () => {
    return (valorCif() + valorAdval() + valorIgv() + valorIpm()) * tasaPerc;
  };

  const totalDerechos = () => {
    return valorAdval() + valorIgv() + valorIpm() + valorPercepcion();
  };

  const comisionAduana = () => {
    const valor = valorCif() * 0.005;
    if (valor < 200) {
      return 200.0;
    } else {
      return valor;
    }
  };

  const valTc = 3.715;
  const gastosAduaneros = {
    comision: comisionAduana(),
    gastosOperativos: 50,
    revision: 50,
    teledespacho: 50,
    gastosAdm: 15,
  };
  const totalGastosAduaneros = () => {
    return (
      gastosAduaneros.comision +
      gastosAduaneros.gastosOperativos +
      gastosAduaneros.revision +
      gastosAduaneros.teledespacho +
      gastosAduaneros.gastosAdm
    );
  };

  function addCommas(nStr) {
    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, `$1,$2`);
    }
    return x1 + x2;
  }

  return (
    <div className="container1">
      {/* <div className="alert alert-warning div-form" role="alert">
        Ingresar los importes en el siguiente orden:{" "}
        valor <strong>FOB</strong> de la factura, <strong>Flete</strong> y <strong>Seguro</strong> (montos aproximados)
        
      </div> */}
      <div className="card is-justify-content-center is-align-items-center has-text-centered mt-1 message is-warning" >
            <h2 className="title m-1 is-4">Calculador Aduanero</h2>
            <p className="m-1">Debe ingresar el valor <strong>Fob, flete y seguro </strong>en automatico se realizará el calculo</p>
            
            </div>
      <div className="shadow">
        <form className="form was-validated ">
          <div className="row justify-content-evenly row-cols-2 p-2">
            {/* Input para ingresar el valor FOB */}
            <InputForm
              valor={valorFob}
              cambiar={cambiarFob}
              labelName="FOB (USD)"
              placeholder="Ingresar Valor FOB"
              disabled={false}
              clase="is-invalid"
              id="validationDefault01"
              required={true}
              clasediv="col-sm form-floating p-1"
            />

            {/* Input para ingresar el valor del FLETE */}
            <InputForm
              valor={valorFlete}
              cambiar={cambiarFlete}
              labelName="Flete (USD)"
              placeholder="Ingresar Flete"
              disabled={false}
              clase="is-invalid"
              id="validationDefault02"
              required={true}
              clasediv="col-sm form-floating p-1"
            />
          </div>
          <div className="row justify-content-evenly row-cols-2 px-2">
            {/* Input para ingresar el valor del SEGURO */}
            <InputForm
              valor={valorSeguro}
              cambiar={cambiarSeguro}
              labelName="Seguro (USD)"
              placeholder="Ingresar Seguro"
              disabled={false}
              clase="is-invalid"
              id="validationDefault03"
              required={true}
              clasediv="col-sm form-floating p-1"
            />

            {/* Input bloqueado donde se muestra el CIF */}
            <InputForm
              valor={valorCif()}
              labelName="CIF (USD)"
              disabled={true}
              clase=""
              id="floatingInput"
              required={true}
              clasediv="col-sm form-floating p-1"
            />
          </div>
        </form>
      </div>
      <br />
      {/* <div className="alert alert-warning div-form" role="alert">
        Los resultados mostrados a continuacion son referenciales considerando{" "}
        <strong>TC: 3.75</strong>
      </div> */}
      <div>
        <br />

        {/* Derechos aduaneros */}
        <div className="shadow">
          <h2 className="h2 filabg card-header">Derechos Aduaneros</h2>
          <table className="table table-colapsed table-hover">
            <thead>
              <tr>
                <th>Concepto</th>
                <th className="text-end">Tasa %</th>
                <th className="text-end">USD</th>
                <th className="text-end">SOL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >
                 Ad Valorem
                </td>
                <td className="text-end">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={cambiarTasaAdv}
                  >
                    <option value="0.06">6%</option>
                    <option value="0">0%</option>
                    <option value="0.11">11%</option>
                  </select>
                </td>
                <td className="text-end">
                  {addCommas(valorAdval().toFixed(2))}
                </td>
                <td className="text-end">
                  {addCommas(Math.round(valorAdval() * valTc))}
                </td>
              </tr>
              <tr>
                <td>Igv</td>
                <td className="text-end">16%</td>
                <td className="text-end">{addCommas(valorIgv().toFixed(2))}</td>
                <td className="text-end">
                  {addCommas(Math.round(valorIgv() * valTc))}
                </td>
              </tr>
              <tr>
                <td>Ipm</td>
                <td className="text-end">2%</td>
                <td className="text-end">{addCommas(valorIpm().toFixed(2))}</td>
                <td className="text-end">
                  {addCommas(Math.round(valorIpm() * valTc))}
                </td>
              </tr>
              <tr>
                <td>Percepcion</td>
                <td className="text-end">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={cambiarTasaPerc}
                  >
                    <option value="0.035">3.5%</option>
                    <option value="0.1">10%</option>
                    <option value="0">0%</option>
                  </select>
                </td>
                <td className="text-end">
                  {addCommas(valorPercepcion().toFixed(2))}
                </td>
                <td className="text-end">
                  {addCommas(Math.round(valorPercepcion() * valTc))}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-jg-purple">
                <td>{""}</td>
                <th className="text-end">Total</th>
                <th className="text-end">
                  ${addCommas(totalDerechos().toFixed(2))}
                </th>
                <th className="text-end">
                  S/{addCommas(Math.round(totalDerechos() * valTc))}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>

        <br />
        <Contact/>

        {/* Agencia de aduana */}
        <div className="shadow">
          <h2 className="h2 filabg card-header">Agencia de Aduana</h2>
          <table className="table table-colapsed table-hover">
            <thead>
              <tr>
                <th>Concepto</th>
                <th className="text-end">USD</th>
                <th className="text-end">SOL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comision de Aduanas</td>
                <td className="text-end">
                  {addCommas(comisionAduana().toFixed(2))}
                </td>
                <td className="text-end">-</td>
              </tr>
              <tr>
                <td>Gastos Operativos</td>
                <td className="text-end">
                  {addCommas(gastosAduaneros.gastosOperativos.toFixed(2))}
                </td>
                <td className="text-end">-</td>
              </tr>
              <tr>
                <td>Revision Documentaria</td>
                <td className="text-end">
                  {addCommas(gastosAduaneros.revision.toFixed(2))}
                </td>
                <td className="text-end">-</td>
              </tr>
              <tr>
                <td>Teledespacho</td>
                <td className="text-end">
                  {addCommas(gastosAduaneros.teledespacho.toFixed(2))}
                </td>
                <td className="text-end">-</td>
              </tr>
              <tr>
                <td>Gastos Administrativos</td>
                <td className="text-end">
                  {addCommas(gastosAduaneros.gastosAdm.toFixed(2))}
                </td>
                <td className="text-end">-</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="text-end">Subtotal</td>
                <td className="text-end">
                  {addCommas(totalGastosAduaneros().toFixed(2))}
                </td>
                <td className="text-end">-</td>
              </tr>
              <tr>
                <td className="text-end">Igv (18%)</td>
                <td className="text-end">
                  {addCommas((totalGastosAduaneros() * 0.18).toFixed(2))}
                </td>
                <td className="text-end">-</td>
              </tr>
              <tr className="bg-jg-purple">
                <th className="text-end">Total</th>
                <th className="text-end">
                  ${addCommas((totalGastosAduaneros() * 1.18).toFixed(2))}
                </th>
                <th className="text-end">-</th>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* Final agencia de aduana */}
        <br/>
        <Contact/>
        {/* Resumen */}

        <div className="shadow">
          <h2 className="h2 filabg card-header">Resumen</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="">Subtotales</th>
                <th className="text-end">USD</th>
                <th className="text-end">SOL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Derechos de Aduana</td>
                <td className="text-end">-</td>
                <td className="text-end">
                  {addCommas(Math.round(totalDerechos() * valTc))}
                </td>
              </tr>
              <tr>
                <td>Total Agencia de Aduana</td>
                <td className="text-end">
                  {addCommas(totalGastosAduaneros().toFixed(2))}
                </td>
                <td className="text-end">-</td>
              </tr>
              <tr>
                <td>Total IGV</td>
                <td className="text-end">
                  {addCommas((totalGastosAduaneros() * 0.18).toFixed(2))}
                </td>
                <td className="text-end">-</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-jg-purple">
                <th>Total Gastos Aduaneros</th>
                <th className="text-end">
                  ${addCommas((totalGastosAduaneros() * 1.18).toFixed(2))}
                </th>
                <th className="text-end">
                  S/{addCommas(Math.round(totalDerechos() * valTc))}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* FIN */}
        <br/>

      </div>
    </div>
  );
};

export default CotizacionAduana;
