import React, { useState, useEffect } from 'react'
import "./Booking.css"
import Header from '../../common/Header/Header.jsx'
import { zones } from '../../../data/data.js'
import betaImage from '/img/1.png'

const Booking = () => {
  const [residentialZones, setResidentialZones] = useState([])

  useEffect(() => {
    setResidentialZones(zones)
  }, [zones])

  return (
    <>
      <Header />
      <div className='booking-zones'>
        {
          residentialZones.map((zone) =>
            <div className='booking-zones__zone' key={zone.id}>
              <img className='booking-zones__image' src={betaImage} alt={`Image of ${zone.name}`} />
              <p className='booking-zonas__capacity'>{zone.capacity}</p>
              <h2 className='booking-zones__tittle'>{zone.name}</h2>
              <p className='booking-zones__description'>{zone.description}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Booking