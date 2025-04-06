import React, { useState, useEffect } from 'react'
import './ReservationForm.css'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'

const ReservationForm = () => {
    const [reservationName, setReservationName] = useState('')
    const [reservationContact, setReservationContact] = useState('')
    const [reservationEmail, setReservationEmail] = useState('')
    const [reservationDay, setReservartionDay] = useState('')
    const [reservationHour, setReservationHour] = useState('')

    const receptor = useLocation()

    const { day, hour } = receptor.state || {}
    useEffect(() => {
        console.log("useEffect: ", day, hour)
        if (day && hour) {
            setReservartionDay(day)
            setReservationHour(hour)
        }
    }, [day, hour])

    return (
        <>
            <Header />
            <section className='section-reservation-form'>
                <form>
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={(e) => console.log(e.target.value)} />
                    <br />
                    <label htmlFor="">Contact</label>
                    <input type="text" />
                    <br />
                    <label htmlFor="">Email</label>
                    <input type="email" />
                    <br />
                    <label htmlFor="">undefined</label>
                    <input type="text" />
                    <br />
                    <label htmlFor="">Hour</label>
                    <input type="text" readOnly value={reservationHour} />
                    <br />
                    <label htmlFor="">Day</label>
                    <input type="text" readOnly value={reservationDay} />
                    <br />
                    <button type='submit'>Book now</button>
                </form>
            </section>
        </>
    )
}

export default ReservationForm