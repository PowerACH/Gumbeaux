import React from 'react'
import '../App.css'

export default function Footer() {
    return (
        <div className = "main-footer">
        <div className = "footer-container">
        <div className = "row">
        {/* Column 1 */}
        <div className = "col-md-3 col-sm-6"></div>
        <h4>Lorem Ipsum</h4>
        <ul className = "list-unstyled">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
        </ul>
        <h4>Lorem Ipsum</h4>
        <ul className = "list-unstyled">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
        </ul>
        </div>
        {/* Footer Bottom */}
        <div className = "footer-bottom">
            <p className = "text-xs-center">
                &copy;{new Date().getFullYear()} PowerACH for Gumbeaux
            </p>
        </div>
        </div>
        </div>
    )
}
