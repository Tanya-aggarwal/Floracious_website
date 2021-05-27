import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Aboutus()
{
    return(
        <Container style={{marginTop:'30px'}}>
         <Row>
    <Col md={6}>
    <p className="abouttitle">
                    About Us
                </p>
                <p className="aboutpara">
                    Flowerworks is your one-stop-shop for hand-picked fresh flowers that are specially curated for you to enjoy a bespoke and luxurious experience. We are creating a story with you to show someone in your life how much you love them.
 

We believe flowers impact emotions and we want to arrange that for you from the comfort of your own homes. 
                </p>
    </Col>
    <Col md={6}>
    <img src="https://cdn.shopify.com/s/files/1/0262/0463/5214/files/Mobile22_x800.gif?v=1576843384" className="sidepic"></img>
    </Col>
  </Row>
</Container>

    )
}

export default Aboutus;