import React from 'react';
import "./Home.css";
import SecurityAndAccess from '../../common/SecurityAndAccess/SecurityAndAccess';
import Header from '../../common/Header/Header.jsx'

const Home = () => {
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
        </>
    );
};

export default Home;
