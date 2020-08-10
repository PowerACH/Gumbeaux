import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Assets/Taste.png'
import image3 from '../Assets/Tasty.png'
import '../App.css'

export default function Jumbotron() {
    return (
        <div>
           <Carousel className = "carousel">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image1}
                alt="First slide" 
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image3}
                alt="Second slide"
                />
            </Carousel.Item>
            </Carousel> 
        </div>
    )
}
