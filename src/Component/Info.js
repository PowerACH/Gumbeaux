import React from 'react'
import Button from 'react-bootstrap/Button'
import '../App.css'

export default function Info(props) {
    return (
        <div className = "info-inner-container">
            <h1 className = "info-header">{props.header}</h1>
            <p className = "info-info">{props.info}</p>
            <Button variant="warning">{props.button}</Button>{' '}
        </div>
    )
}
