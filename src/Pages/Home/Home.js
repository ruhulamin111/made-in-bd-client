import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummary';
import LatestTools from './LatestTools';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <LatestTools></LatestTools>
            <BusinessSummury></BusinessSummury>
        </div>
    );
};

export default Home;