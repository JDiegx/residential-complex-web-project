import React, { useState, useEffect } from 'react'
import Calendar from "../Calendar/Calendar.jsx"
import { useLocation } from "react-router-dom"
import Header from "../Header/Header.jsx"

const ReservationCalendar = () => {
  const [zoneReservation, setZoneReservation] = useState({})
  const receptorZone = useLocation();
  const { zone } = receptorZone.state || {}

  useEffect(() => {
    console.log("useEffect: ", zone)
    if (zone) {
      setZoneReservation(zone)
    }
  }, [zone])

  return (
    <>
      <Header />
      <section>
        <h2>Calendario de la zona que se quiere reservar:{zoneReservation.name} </h2>
        <Calendar zoneObject={zoneReservation} />
      </section>
    </>
  )
}

export default ReservationCalendar