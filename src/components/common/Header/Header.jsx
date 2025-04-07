import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import laderaVerdeLogo from "/img/ladera-verder-logo.png"
import Aside from "../Aside/Aside";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => setIsOpen(true)
    const closeMenu = () => setIsOpen()

    return (
        <header className="header">
            <Link to={"/"}>
                <img src={laderaVerdeLogo} alt="" className="header__logo" />
            </Link>
            <div className="header__menu">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item">
                            <Link to={"/"} className="header__link">Home</Link>
                        </li>
                        <li className="header__list-item">
                            <Link to={"/booking"} className="header__link">Booking</Link>
                        </li>
                        <li className="header__list-item">
                            <Link to={"/dashboard"} className="header__link">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
                <p className="header__address">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                    Calle #90 50-10 - M10
                </p>
            </div>
            <button className="header__button-menu" onClick={openMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="header__button" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </button>
            <Aside isOpen={isOpen} closeMenu={closeMenu} />
        </header>
    );
};

export default Header;
