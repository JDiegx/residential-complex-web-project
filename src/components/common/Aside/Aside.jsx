import React from 'react'
import "./Aside.css"
import { Link } from "react-router-dom";

const Aside = ({isOpen, closeMenu}) => {
    return (
        <aside className={`aside-menu ${isOpen ? '--open-menu' : ''}`}>
        <button className="aside-menu__close-btn" onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="aside-menu__close-icon" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
        </button>
        <nav className="aside-menu__navigation">
            <ul className="aside-menu__list">
                <li className="aside-menu__list-item">
                    <Link to={"/"} className="aside-menu__link">Home</Link>
                </li>
                <li className="aside-menu__list-item">
                    <Link to={"/booking"} className="aside-menu__link">Booking</Link>
                </li>
                <li className="aside-menu__list-item">
                    <Link to={"/dashboard"} className="aside-menu__link">Dashboard</Link>
                </li>
            </ul>
        </nav>
    </aside>
    )
}

export default Aside