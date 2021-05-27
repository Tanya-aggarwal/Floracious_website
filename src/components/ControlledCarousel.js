import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import {useState} from 'react'
import Floracious from '../images/Floracious.png'
import floral2 from '../images/floral2.png'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <a href="https://www.w3schools.com/default.asp">
          <img
            className="d-block w-100"
            src={Floracious}
            alt="First slide"
            style={{width:'100%',
            height:'100%'}}
          /> </a>
         {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>*/}
          
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://www.w3schools.com/default.asp">
          <img
            className="d-block w-100"
            src={floral2}
            alt="First slide"
            style={{width:'100%',
            height:'100%'}}
          /> </a>
        
        </Carousel.Item>
        </Carousel>
  );
}

{/*render(<ControlledCarousel />);*/}

export default ControlledCarousel;