import React, { useRef } from 'react';
import "./Home.css";
import SecurityAndAccess from '../../common/SecurityAndAccess/SecurityAndAccess';
import Header from '../../common/Header/Header.jsx'
import { zones } from '../../../data/data.js';
import Zone from '../../common/Zone/Zone.jsx';

const Home = () => {
    const zonesRef = useRef(null);

    const scrollLeft = () => {
        zonesRef.current.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        zonesRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <Header />
            <section className='home'>
                <div className='home__content'>
                    <p className='home__description'>
                        Exclusive access for residents <br /> and their guests.
                    </p>
                    <h1 className='home__title'>
                        Make a reservation and enjoy the exclusive dishes of our residential complex.
                    </h1>
                    <button className='home__button'>Explore available spoods</button>
                </div>
                <div className='home__image'></div>
            </section>
            <SecurityAndAccess />
            <section className="home__zones-section">
                <h2 className="home__zones-title">Explore available spoods:</h2>
                <div className="home__zone-container" ref={zonesRef}>
                    <div className="home__zones">
                        {
                            zones.map((zone) => <Zone key={zone.id} zone={zone} />)
                        }
                    </div>
                </div>
                <div className="home__zones-navigation">
                    <button className="home__zones-button" onClick={scrollLeft} aria-label="Scroll left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="home__zones-icon" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                        </svg>
                    </button>
                    <button className="home__zones-button" onClick={scrollRight} aria-label="Scroll right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="home__zones-icon" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;
