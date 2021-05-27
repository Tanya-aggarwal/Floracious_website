import React from "react";
import Navbarflo from "./components/Navbarflo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from "./components/Aboutus";
import Footor from "./components/Footor";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Widget from "./components/Widget"
import Contactus from "./components/Contactus"
import Carddiv from "./components/Carddiv";
import ControlledCarousel from "./components/ControlledCarousel"
import Homepage from "./components/Homepage";
import {Route, Switch } from 'react-router-dom';





library.add(faStroopwafel)
function App() {
  

  return (

    <div className="App">
     <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/contactus" component={Contactus} />
            </Switch>
        
       
    </div>
  );
}

export default App;
