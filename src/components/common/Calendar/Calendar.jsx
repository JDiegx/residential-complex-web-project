import React, { useState, useEffect } from 'react'
import "./Calendar.css"
import { calendar } from '../../../data/data'

const Calendar = () => {
    const [days, setDays] = useState(calendar[0])
    const [hours, setHours] = useState(calendar[1])

    useEffect(() => {
        setDays(calendar[0])
        setHours(calendar[1])
    })

    return (
        <table className='calendar-table'>
            <thead className='calendar-table__table-head'>
                <tr className='calendar-table__days'>
                    <th className='calendar-table-day' >Hours</th>
                    {days.map((day, i) => <th className='calendar-table-day' key={i}>{day}</th>)}
                </tr>
            </thead>
            <tbody className='calendar-table__table-body'>
                {
                    hours.map((hour) =>
                        <tr className='calendar-table__hours' key={hour} >
                            <td className='calendar-table-hour'>{hour}</td>
                            {
                                days.map((i) =>
                                    <td key={i} className='calendar-table-hour'>
                                        <button>Reservar</button>
                                    </td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Calendar