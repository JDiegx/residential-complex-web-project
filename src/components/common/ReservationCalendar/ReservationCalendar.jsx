import React, { useState, useEffect } from 'react'
import "./ReservationCalendar.css"
import Calendar from "../Calendar/Calendar.jsx"
import { useLocation } from "react-router-dom"
import Header from "../Header/Header.jsx"

const ReservationCalendar = () => {
  const [zoneReservation, setZoneReservation] = useState(null)
  const receiverZone = useLocation()
  const { zone } = receiverZone.state || {}

  useEffect(() => {
    if (zone) {
      setZoneReservation(zone)
    }
  }, [zone])

  return (
    <>
      <Header />
      <section className='sectionReservationCalendar'>
        {zoneReservation ? (
          <>
            <Calendar zoneObject={zoneReservation} />
          </>
        ) : (
          <p>Cargando calendario...</p>
        )}
      </section>
    </>
  )
}

export default ReservationCalendar
