 import React from "react";

 import Navbarflo from "./Navbarflo"
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Footor from "./Footor";
 import { library } from '@fortawesome/fontawesome-svg-core'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
 import Widget from "./Widget"
 import Carddiv from "./Carddiv";
 import ControlledCarousel from "./ControlledCarousel"
 import Aboutus from './Aboutus'
 import Contactus from './Contactus'
 library.add(faStroopwafel)

 function Homepage()
 {
     return(
         <div>
               
        <Navbarflo />
        <ControlledCarousel />
        <Aboutus />
        <Carddiv />
        <div className="abouttitle">
                   <p> #Floracious_ </p>
                   </div>

                   <p style={{fontFamily:"Montserrat",fontSize:"30px",textAlign:"center"}}> Check our Instagram</p>
        <Widget />
<Footor />

         </div>
     );
 }

 export default Homepage;