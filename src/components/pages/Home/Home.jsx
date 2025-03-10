import React from 'react';
import "./Home.css";

const Home = () => {
    return (
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
    );
};

export default Home;
