import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/common/Header/Header.jsx'
import Home from '../components/pages/Home/Home.jsx'
import Dashboard from '../components/pages/Dashboard/Dashboard.jsx'
import Booking from '../components/pages/Booking/Booking.jsx'
import NotFound from '../components/pages/NotFound/NotFound.jsx'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRouter