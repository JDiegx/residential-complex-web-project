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
                {
                    days.map((day) => {
                        return (
                            <tr className='calendar-table__days' key={day}>
                                <th> {day}</th>
                            </tr>
                        )
                    })
                }
            </thead>
            <tbody>
                {
                    hours.map((hour) => <tr key={hour} >
                        <th>{hour}</th>
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default Calendar