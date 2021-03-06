import React from 'react'
import '../App.css';

export default function NavBar() {
    return (
        <div className = "nav-container">
            <nav>
                <ul className = "menu">
                    <li className = "menu-item menu-location" >
                        <a href = "#">LOCATION</a>
                    </li>
                    <li className = "menu-item menu-menu" >
                        <a href = "#">MENU</a>
                    </li>
                    <li className = "menu-item menu-giftcert" >
                        <a href = "#">GIFT CERTIFICATES</a>
                    </li>
                    <li className = "menu-item menu-careers" >
                        <a href = "#">CAREERS</a>
                    </li>
                    <li className = "menu-item menu-contact" >
                        <a href = "#">CONTACT US</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
