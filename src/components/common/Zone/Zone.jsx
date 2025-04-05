import React from 'react'
import "./Zone.css"
import betaImage from '/img/1.png'

const Zone = ({ zone }) => {
    return (
        <div className='zone'>
            <img className='zone__image' src={betaImage} alt={`Image of ${zone.name}`} />
            <div className='zone__information'>
                <p className='zone__capacity'>{zone.capacity}</p>
                <h2 className='zone__title'>{zone.name}</h2>
                <p className='zone__description'>{zone.description}</p>
            </div>
            <button className='zone__book-now-button'>Book now</button>
        </div>
    )
}

export default Zone
