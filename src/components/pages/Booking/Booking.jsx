import React, { useState, useEffect } from 'react'
import "./Booking.css"
import Header from '../../common/Header/Header.jsx'
import { zones } from '../../../data/data.js'
import Zone from '../../common/Zone/Zone.jsx'

const Booking = () => {
  const [residentialZones, setResidentialZones] = useState([])

  useEffect(() => {
    setResidentialZones(zones)
  }, [zones])

  return (
    <>
      <Header />
      <div className='booking'>
        {
          residentialZones.map((zone) => <Zone key={zone.id} zone={zone} />)
        }
      </div>
    </>
  )
}

export default Booking