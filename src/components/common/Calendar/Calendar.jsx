import React, { useState, useEffect } from 'react'
import "./Calendar.css"
import { calendar } from '../../../data/data'
import betaImage from '/img/1.png'

const Calendar = ({ nameZone }) => {
    const [days, setDays] = useState([])
    const [hours, setHours] = useState([])

    useEffect(() => {
        setDays(calendar[0])
        setHours(calendar[1])
    }, [calendar])

    const reserve = (day, hour) => alert(`Se solicita reserva en ${nameZone} para el dia ${day} a las ${hour}`)

    return (
        <div className='calendar'>
            <div className='calendar__container-image'>
                <img src={betaImage} alt="" className='calendar-image' />
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
                                        <td key={i} className='calendar-table__cell'>
                                            <button className='calendar-table__button' onClick={() => reserve(i, hour)}>Reserve</button>
                                        </td>
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
