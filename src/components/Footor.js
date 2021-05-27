import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Instagram } from 'react-feather';
import { Mail } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





function Footor(){
    return(
        
            <Container fluid style={{backgroundColor:"#343a40"}}>
            <Row>
                <Col md={4}> 
                <h2 className="contacthead">
                    Contact Us
                </h2>
                <div>
                <p className="contactus">
                    Email: floracious@gmail.com<br/>
                    +91 9311497084<br/>
                    +91 924344444<br />

                </p>
                </div>
                </Col>                
                <Col md={4}> </Col>                
                <Col md={4}>
                    <Row>
                        <Col sm={12}>
                        <div className="cont" style={{margin: "20px auto 20px auto"}}>
                         <a href="#" className="help">
                         Delivery Policies 
                        </a>
                        <div><a href="#" className="help">
                         FAQs
                        </a><br /></div>
                        <a href="#" className="help">
                        Feedbacks 
                        </a>
                        </div>
                        </Col>
    
                        <Col sm={12}>
                        <div>
                        <div className="icons" style={{textAlign:'center'}}>
                        <ul className="social">
                            <li>
                                <a href="#">
                                    <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                                </a>
                           </li>
                           <li>
                                <a href="#">
                                    <i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i>

                                </a>
                           </li>
                           <li>
                               <a href="#">
                                <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                               </a>
                           </li>
                           <li>
                            <a href="#">
                                <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
                            </a>
                           </li>
                           
                        </ul>
                        </div>
                         
                    



                        </div>
                        </Col>

                    </Row>
                </Col>                     
                </Row>
            </Container>
        
    )
}

export default Footor