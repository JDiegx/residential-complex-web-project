import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Calendar.css";
import { calendar } from '../../../data/data';

const Calendar = ({ zoneObject }) => {
    const [days, setDays] = useState([]);
    const [hours, setHours] = useState([]);
    const [zoneReserve, setZoneReserve] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("🔁 useEffect ejecutado - Cargando calendario");
        setDays(calendar[0]);
        setHours(calendar[1]);
        const fetchReservas = async () => {
            const reservasTotales = [];
            for (const day of calendar[0]) {
                console.log(`📡 Consultando reservas para zona: ${zoneObject.name}, día: ${day}`);
                try {
                    const res = await fetch(`http://localhost:3000/disponibilidad/${encodeURIComponent(zoneObject.name)}/${day}`);
                    const data = await res.json();
                    console.log(`✅ Respuesta recibida para el día ${day}:`, data);
                    const reservasDia = data.ocupados.map((hora) => ({
                        day: data.dia, // sin .toLowerCase()
                        time: hora.trim()
                    }));
                    reservasTotales.push(...reservasDia);
                } catch (error) {
                    console.error("❌ Error al consultar disponibilidad:", error);
                }
            }
            console.log("📥 Reservas totales obtenidas:", reservasTotales);
            setZoneReserve(reservasTotales);
        };
        fetchReservas();
    }, [zoneObject.name]);

    const createReservation = (day, hour, nameZone) => {
        console.log(`📝 Intentando reservar para el día ${day} a las ${hour}`);
        navigate("/reservation-form", { state: { day, hour, nameZone } });
    };

    const isReserved = (day, hour) => {
        const horaLimpia = hour.trim();
        const match = zoneReserve.some(reservation =>
            reservation.day === day && reservation.time === horaLimpia
        );

        if (match) {
            console.log(`❗ Reservado: ${day} - ${horaLimpia}`);
        }

        return match;
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
                        {days.map((day) => (
                            <th className='calendar-table__header' key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='calendar-table__body'>
                    {hours.map((hour) => (
                        <tr className='calendar-table__row' key={hour}>
                            <td className='calendar-table__cell'>{hour}</td>
                            {days.map((day) => {
                                const reserved = isReserved(day, hour);
                                return (
                                    <td className='calendar-table__cell' key={`${day}-${hour}`}>
                                        <button
                                            className={`calendar-table__button ${reserved ? 'calendar-table__button--reserved' : ''}`}
                                            disabled={reserved}
                                            onClick={() => !reserved && createReservation(day, hour, zoneObject.name)}
                                            title={reserved ? "Este horario ya está reservado" : "Haz clic para reservar"}
                                        >
                                            {reserved ? "Reserved" : "Reserve"}
                                        </button>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
