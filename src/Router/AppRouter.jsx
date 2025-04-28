import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/common/Footer/Footer.jsx'
import Home from '../components/pages/Home/Home.jsx'
import Dashboard from '../components/pages/Dashboard/Dashboard.jsx'
import Booking from '../components/pages/Booking/Booking.jsx'
import NotFound from '../components/pages/NotFound/NotFound.jsx'
import ReservationForm from '../components/common/ReservationForm/ReservationForm.jsx'
import ReservationCalendar from '../components/common/ReservationCalendar/ReservationCalendar.jsx'
import Beta from '../components/common/Beta/Beta.jsx'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/reservation-form' element={<ReservationForm />} />
                <Route path='/reservation-calendar' element={<ReservationCalendar />} />
                <Route path='/beta' element={<Beta />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {/* <Footer /> */}
        </>
    )
}

export default AppRouter