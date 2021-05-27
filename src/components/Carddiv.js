import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Carddiv(){
    return(
        <Container fluid >
        <Row>
    <Col xs={12}>
        <Row>
            <p className="title" className="abouttitle" style={{textAlign:"center",display:"block",marginLeft:"auto",marginRight:"auto"}}>Our Mantra</p>
        </Row>
        <Row style={{paddingTop:"60px"}}>
        <Col xs={12} md={3}>
            <img src="https://i.ibb.co/wL3v00G/quality.png" style={{display:"block",marginLeft:"auto",marginRight:"auto"}}/>
           <b> <p ClassName="top" style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"18px",textAlign:"center"}}>QUALITY</p> </b>
            <p  ClassName="bottom" style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"15px",textAlign:"center"}}>We naver compromise on our quality, be it beautiful and splendid flowers or mouth watering cake!!</p>
        </Col>
        <Col xs={12} md={3}>
            <img src="https://i.ibb.co/4NsRc7b/support.png" style={{display:"block",marginLeft:"auto",marginRight:"auto"}}/>
           <b> <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"18px",textAlign:"center"}}>CUSTOMIZE</p> </b>
            <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"15px",textAlign:"center"}}>We know you all have crazy yet unique chices then why restrict? we have all covered for you!</p>
        </Col>
        <Col xs={12} md={3}>
            <img src="https://i.ibb.co/6m8hGkk/customer-review.png" style={{display:"block",marginLeft:"auto",marginRight:"auto"}}/>
           <b> <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"18px",textAlign:"center"}}>CUSTOMER SATISFACTION </p> </b>
            <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"15px",textAlign:"center"}}>Our motto- deliver big smiles ;)...You can check our instagram as well for proof..!</p>
        </Col>
        <Col xs={12} md={3}>
            <img src="https://i.ibb.co/VDF52W7/feedback.png" style={{display:"block",marginLeft:"auto",marginRight:"auto"}}/>
           <b> <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"18px",textAlign:"center"}}>FEEDBACK</p> </b>
            <p style={{fontFamily:"Montserrat",marginLeft:"auto",marginRight:"auto",fontSize:"15px",textAlign:"center"}}>We are always ready to hear your feedback...so, yes we are ready </p>
        </Col>
        </Row>

    </Col>
  
  </Row>
</Container>
    )
}

export default Carddiv