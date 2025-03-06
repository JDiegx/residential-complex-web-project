import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/common/Header/Header.jsx'
import Home from '../components/pages/Home/Home.jsx'
import Dashboard from '../components/pages/Dashboard/Dashboard.jsx'
import Booking from '../components/pages/Booking/Booking.jsx'

const AppRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/booking' element={<Booking />} />
            </Routes>
        </>
    )
}

export default AppRouter