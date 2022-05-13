import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
      <div className="box container1 is-flex is-justify-content-space-between id-info">
        
        
        
         
            <Link to="/">
              
              <span className="button is-danger is-medium is-rounded is-outlined  ">Calculador</span>
            </Link>
          
        
            <Link to="/convertidor-de-derechos">
        
              <span className="button is-info is-medium is-rounded is-outlined">Convertidor</span> 
            </Link>
         
          
        
        


      
        {/* <h1 className='h2 text-center' >
            Calculador Aduanero
        </h1> */}
              
      </div>
    );
  };

  export default Header