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

    const receiver = useLocation();
    const { day, hour, nameZone } = receiver.state || {};

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

        try {
            const response = await fetch('http://localhost:3000/reservar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reserva),
            });

            const data = await response.json();

            if (response.ok) {
                setStatusMessage("✅ ¡Reserva exitosa!");
            } else {
                setStatusMessage(`⚠️ Error: ${data.mensaje}`);
            }
        } catch (error) {
            setStatusMessage("❌ Error de conexión al servidor.");
        }
    };

    return (
        <>
            <Header />
            <section className="reservation-form">
                <h2 className="reservation-form__title">Reservation Form</h2>
                <form className="reservation-form__form" onSubmit={handleSubmit}>
                    <fieldset className="reservation-form__fieldset">
                        <legend className="reservation-form__legend">Your Information</legend>
                        <div className="reservation-form__group">
                            <label htmlFor="name" className="reservation-form__label">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="reservation-form__input"
                                value={reservationName}
                                onChange={(e) => setReservationName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="reservation-form__group">
                            <label htmlFor="contact" className="reservation-form__label">Contact</label>
                            <input
                                id="contact"
                                type="text"
                                className="reservation-form__input"
                                value={reservationContact}
                                onChange={(e) => setReservationContact(e.target.value)}
                                required
                            />
                        </div>
                        <div className="reservation-form__group">
                            <label htmlFor="email" className="reservation-form__label">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="reservation-form__input"
                                value={reservationEmail}
                                onChange={(e) => setReservationEmail(e.target.value)}
                                required
                            />
                        </div>
                    </fieldset>
                    <fieldset className="reservation-form__fieldset">
                        <legend className="reservation-form__legend">Reservation Details</legend>
                        <div className="reservation-form__group">
                            <label htmlFor="zone" className="reservation-form__label">Zone</label>
                            <input
                                id="zone"
                                type="text"
                                className="reservation-form__input"
                                value={reservationZone}
                                readOnly
                            />
                        </div>
                        <div className="reservation-form__group">
                            <label htmlFor="hour" className="reservation-form__label">Hour</label>
                            <input
                                id="hour"
                                type="text"
                                className="reservation-form__input"
                                value={reservationHour}
                                readOnly
                            />
                        </div>
                        <div className="reservation-form__group">
                            <label htmlFor="day" className="reservation-form__label">Day</label>
                            <input
                                id="day"
                                type="text"
                                className="reservation-form__input"
                                value={reservationDay}
                                readOnly
                            />
                        </div>
                    </fieldset>
                    <button type="submit" className="reservation-form__submit">Book Now</button>
                    {statusMessage && <p className="reservation-form__status">{statusMessage}</p>}
                </form>
            </section>
        </>
    );
};

export default ReservationForm;
