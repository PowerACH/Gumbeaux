import React from 'react'

export default function Location() {
    return (
        <div>
            <iframe width="600" height="450" frameborder="0" style="border:0"
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJVWpXNUAm9YgRh-0obyL0N08&key=${MAP_API}` allowfullscreen>}
            </iframe>
        </div>
    )
}
