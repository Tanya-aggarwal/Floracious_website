import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import contactpic from '../images/con4.jpg'


function Contactus()
{
    return(
           <div> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f1839d" fill-opacity="1" d="M0,64L48,74.7C96,85,192,107,288,149.3C384,192,480,256,576,240C672,224,768,128,864,117.3C960,107,1056,181,1152,186.7C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
        <Container fluid >
       
            <Row>
            <Col md={6}>
            <img src={contactpic} style={{width:'100%',height:'100%'}}></img>
            </Col>
                <Col  md={6} style={{marginLeft:'auto',marginRight:'auto', textAlign:'center'}}>
                <p className="abouttitle" style={{marginLeft:'auto',marginRight:'auto'}}>Contact Us</p>

                        <div style={{marginTop:'auto',marginBottom:'auto'}}>

                        {/*  <form className="signupForm" name="signupform" id="test-form">
                          <ul class="noBullet">

                                 <li>
                                    <input type="text" class="inputFields" id="name" name="name" placeholder=" Full Name"/>
                                </li>
                                
                                <li>
                                    <label for="phone"></label>
                                    <input type="text" class="inputFields" id="phone" name="phone" placeholder="Mobile No." />
                                </li>
                                <li>
                                    <label for="email"></label>
                                    <input type="text" class="inputFields" id="email" name="email" placeholder="Email" />
                                </li>
                                <li>
                                <textarea id="message" name="message" rows="2" cols="80" className="inputFields" placeholder="Your Message..."> jxjgxj </textarea>
                                </li>
                                <li className="center-btn">
                                    <input type="submit" id="submit-form" name="join" alt="Join" value="Join" />
                                </li>
                                </ul>
                        </form>*/}
                        <form method="post" autocomplete="off" name="google-sheet">
                                        <div class="form-group">
                                        <input type="text" class="inputFields" id="Name" name="Name" placeholder=" Full Name"/>

                                        </div>
                                        <div class="form-group">
                                        <label for="email"></label>
                                    <input type="text" class="inputFields" id="Email" name="Email" placeholder="Email" />
                                        </div>
                                        <div class="form-group">
                                        <input type="text" class="inputFields" id="Phone" name="Phone" placeholder="Mobile No." />

                                        </div>
                                        <div class="form-group">
                                        <textarea id="message" name="message" rows="2" cols="80" className="inputFields" placeholder="Your Message...!"> </textarea>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" id="join-btn" name="submit"  value="submit" />
                                        </div>
                                    </form>
                        </div>
                </Col>
                
            </Row>
            
        </Container>
        

        </div>
    );
}

export default Contactus;