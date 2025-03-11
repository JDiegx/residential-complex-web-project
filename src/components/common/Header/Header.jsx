import React, { useState } from "react";
import "./Header.css";
import laderaVerdeLogo from "/img/ladera-verder-logo.png"
import Aside from "../Aside/Aside";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => setIsOpen(true)

    const closeMenu = () => setIsOpen()

    return (
        <header className="header">
            <img src={laderaVerdeLogo} alt="" className="header__logo" />
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
