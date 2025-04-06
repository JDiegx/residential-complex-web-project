import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Calendar.css"
import { calendar } from '../../../data/data'

const Calendar = ({ zoneObject }) => {
    const [days, setDays] = useState([])
    const [hours, setHours] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setDays(calendar[0])
        setHours(calendar[1])
    }, [calendar])

    const createReservation = (day, hour) => {
        console.log(day, hour)
        navigate("/reservation-form", {state: {day, hour}})
    };  

    const isReserved = (day, hour) => {
        return zoneObject.reserve.some(reservation => reservation.day === day && reservation.time === hour);
    };

    return (
        <div className='calendar'>
            <div className='calendar__container-image'>
                <img src={`/img/zones/${zoneObject.image}`} alt="" className='calendar-image' />
            </div>
            <table className='calendar-table'>
                <thead className='calendar-table__head'>
                    <tr className='calendar-table__row'>
                        <th className='calendar-table__header'>Hours</th>
                        {days.map((day) => <th className='calendar-table__header' key={day}>{day}</th>)}
                    </tr>
                </thead>
                <tbody className='calendar-table__body'>
                    {
                        hours.map((hour) =>
                            <tr className='calendar-table__row' key={hour}>
                                <td className='calendar-table__cell'>{hour}</td>
                                {
                                    days.map((i) =>
                                        {
                                            const reserved = isReserved(i, hour)
                                            return (
                                                <td className='calendar-table__cell' key={i}>
                                                    <button 
                                                        className={`calendar-table__button ${reserved ? 'calendar-table__button--reserved' : ''}`}
                                                        disabled={reserved}
                                                        onClick={() => !reserved && createReservation(i, hour)}
                                                    >
                                                        {reserved ? "Reserved" : "Reserve"}
                                                    </button>
                                                </td>
                                            )
                                        }
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Calendar
