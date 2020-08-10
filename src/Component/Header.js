import React from 'react'
import image from '../Assets/Taste.png'
import '../App.css';

export default function Header() {
    return (
        <div className = "header-container">
            <img className = "header-image" src= {image} alt="Header" />
        </div>
    )
}
