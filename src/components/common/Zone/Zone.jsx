import React from 'react'
import "./Zone.css"

const Zone = ({ zone }) => {
    return (
        <div className='zone'>
            <img className='zone__image' src={`/img/zones/${zone.image}`} alt={`Image of ${zone.name}`} />
            <div className='zone__information'>
                <p className='zone__capacity'>{`Capacity for ${zone.capacity} people`}</p>
                <h2 className='zone__title'>{zone.name}</h2>
                <p className='zone__description'>{zone.description}</p>
            </div>
            <button className='zone__book-now-button'>Book now</button>
        </div>
    )
}

export default Zone
