
import React from 'react'
import {

  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { CalculadorDerechos } from './CalculadorDerechos'

import CotizacionAduana from './CotizacionAduana'
import Header from './Header'


function App() {
  return (
    <div className="container container1">
      
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">        
          <CotizacionAduana />
        </Route>
        <Route exact path="/convertidor-de-derechos">
          <CalculadorDerechos />
        </Route>
      </Switch>
      <Header />
      <br/>
      </Router>
      

    </div>
  );
}

export default App;
