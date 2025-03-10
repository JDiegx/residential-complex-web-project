import React, { useState } from "react";
import "./Header.css";
import laderaVerdeLogo from "/img/ladera-verder-logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => setIsOpen(true)

    const closeMenu = () => setIsOpen()

    return (
        <header className="header">
            <img src={laderaVerdeLogo} alt="" className="header__logo" />
            <button className="header__button-menu" onClick={openMenu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="header__button"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
            </button>
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
                            <Link to={"/dashboard"} className="aside-menu__link">Dashboard</Link>
                        </li>
                        <li className="aside-menu__list-item">
                            <Link to={"/booking"} className="aside-menu__link">Booking</Link>
                        </li>
                    </ul>
                </nav>
                <p className="aside-menu__address">Calle #90 50-10 - M10</p>
            </aside>
        </header>
    );
};

export default Header;
