import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummary';
import LatestTools from './LatestTools';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <LatestTools></LatestTools>
            <Reviews></Reviews>
            <BusinessSummury></BusinessSummury>
        </div>
    );
};

export default Home;