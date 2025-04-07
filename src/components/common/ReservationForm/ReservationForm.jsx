import React, { useState, useEffect } from 'react';
import './ReservationForm.css';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';

const ReservationForm = () => {
    const [reservationZone, setReservationZone] = useState('');
    const [reservationName, setReservationName] = useState('');
    const [reservationContact, setReservationContact] = useState('');
    const [reservationEmail, setReservationEmail] = useState('');
    const [reservationDay, setReservartionDay] = useState('');
    const [reservationHour, setReservationHour] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const receptor = useLocation();
    const { day, hour, nameZone } = receptor.state || {};

    useEffect(() => {
        if (day && hour && nameZone) {
            setReservartionDay(day);
            setReservationHour(hour);
            setReservationZone(nameZone);
        }
    }, [day, hour, nameZone]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reserva = {
            zona: reservationZone,
            dia: reservationDay, 
            hora: reservationHour,
            nombre: reservationName,
            contacto: reservationContact,
            email: reservationEmail
        };

        console.log("📤 Enviando reserva:", reserva);

        try {
            const response = await fetch('http://localhost:3000/reservar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reserva),
            });

            const data = await response.json();
            console.log("✅ Respuesta del servidor:", data);

            if (response.ok) {
                setStatusMessage("✅ ¡Reserva exitosa!");
            } else {
                setStatusMessage(`⚠️ Error: ${data.mensaje}`);
            }
        } catch (error) {
            console.error("❌ Error al enviar la reserva:", error);
            setStatusMessage("❌ Error de conexión al servidor.");
        }
    };

    return (
        <>
            <Header />
            <section className='section-reservation-form'>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={reservationName}
                        onChange={(e) => setReservationName(e.target.value)}
                        required
                    />
                    <br />

                    <label>Contact</label>
                    <input
                        type="text"
                        value={reservationContact}
                        onChange={(e) => setReservationContact(e.target.value)}
                        required
                    />
                    <br />

                    <label>Email</label>
                    <input
                        type="email"
                        value={reservationEmail}
                        onChange={(e) => setReservationEmail(e.target.value)}
                        required
                    />
                    <br />

                    <label htmlFor="">Zona a reservar: </label>
                    <input type="text" readOnly value={reservationZone} />
                    <br />
                    <label>Hour</label>
                    <input type="text" readOnly value={reservationHour} />
                    <br />

                    <label>Day</label>
                    <input type="text" readOnly value={reservationDay} />
                    <br />

                    <button type='submit'>Book now</button>

                    {statusMessage && <p>{statusMessage}</p>}
                </form>
            </section>
        </>
    );
};

export default ReservationForm;
