import React from "react";

export const FormCif = () => {
  return (
    <div>
      <form className="form">
        

        
      </form>
    </div>
  );
};

const InputForm = ({valor, cambiar, labelName, placeholder, disabled, clase, id, required, clasediv}) => {
  return (
    <div className={`${clasediv}`}>
      <input
        type="text"
        className={`form-control ${clase}`}
        placeholder={placeholder}
        value={valor}
        onChange={cambiar}
        disabled={disabled}
        id={`${id}`}
        required={required}
      />
      <label htmlFor={id}>
        {labelName}
      </label>
    </div>
  );
};
export default InputForm;





// {/* <div className="form-floating mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Ingresar Flete"
//             value={valorFlete}
//             onChange={cambiarFlete}
//           />
//           <label for="floatingInput">
//             Ingresar Valor del Flete aprox (USD)
//           </label>
//         </div> */}

        
//         {/* <div className="form-floating mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Ingresar Seguro"
//             value={valorSeguro}
//             onChange={cambiarSeguro}
//           />
//           <label for="floatingInput">
//             Ingresar valor del Seguro aprox (USD)
//           </label>
//         </div> */}

//         {/* Input bloqueado donde se muestra el CIF */}
//         {/* <div className="form-floating mb-3">
//           <input
//             type="text"
//             className="form-control"
//             value={valorCif()}
//             disabled
//           />
//           <label clasName="bg-jg-purple" for="floatingInput">
//             CIF (USD) = FOB + Flete + Seguro
//           </label>
//         </div> */}





// {/* <form className="form">
//         {/* Input para ingresar el valor FOB */}
//         <div className="form-floating mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Ingresar Valor FOB"
//             value={valorFob}
//             onChange={cambiarFob}
//           />
//           <label for="floatingInput">Ingresar Valor FOB de su factura aprox(USD)</label>
//         </div>

//         {/* Input para ingresar el valor del FLETE */}
//         <div className="form-floating mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Ingresar Flete"
//             value={valorFlete}
//             onChange={cambiarFlete}
//           />
//           <label for="floatingInput">Ingresar Valor del Flete aprox (USD)</label>
//         </div>

//         {/* Input para ingresar el valor del SEGURO */}
//         <div className="form-floating mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Ingresar Seguro"
//             value={valorSeguro}
//             onChange={cambiarSeguro}
//           />
//           <label for="floatingInput">Ingresar valor del Seguro aprox (USD)</label>
//         </div>

//         {/* Input bloqueado donde se muestra el CIF */}
//         <div className="form-floating mb-3">
//           <input type="text" className="form-control" value={valorCif()}  disabled/>
//           <label clasName='bg-jg-purple' for="floatingInput">CIF (USD) = FOB + Flete + Seguro</label>
//         </div>

//  </form> */}