import React from 'react';
import Banner from '../../Banner/Banner';
import LogisticsSections from '../../LogisticsSections/LogisticsSections';
import Brands from '../../Brands/Brands';
import Reviews from '../../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LogisticsSections></LogisticsSections>
            <Brands></Brands>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;