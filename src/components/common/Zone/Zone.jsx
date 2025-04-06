import React from 'react'
import "./Zone.css"
import { useNavigate } from 'react-router-dom'

const Zone = ({ zone }) => {
    const navigateZone = useNavigate()

    const selectedZone = (zone) => {
        console.log(zone);
        navigateZone("/reservation-calendar", { state: { zone } })
    }

    return (
        <div className='zone'>
            <img className='zone__image' src={`/img/zones/${zone.image}`} alt={`Image of ${zone.name}`} />
            <div className='zone__information'>
                <p className='zone__capacity'>{`Capacity for ${zone.capacity} people`}</p>
                <h2 className='zone__title'>{zone.name}</h2>
                <p className='zone__description'>{zone.description}</p>
            </div>
            <button className='zone__book-now-button' onClick={() => { selectedZone(zone) }}>Book now</button>
        </div>
    )
}

export default Zone
