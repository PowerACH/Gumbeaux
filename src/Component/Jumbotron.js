import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Assets/1.png'
import image2 from '../Assets/2.png'
import image3 from '../Assets/3.png'


export default function Jumbotron() {
    return (
        <div>
           <Carousel>
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
                src={image2}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel> 
        </div>
    )
}
