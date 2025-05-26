import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeatureJob from '../FeatureJob/FeatureJob';

const Home = () => {
    return (
        <div className='mx-10'>
            <Banner/>
            <CategoryList/>
            <FeatureJob/>
        </div>
    );
};

export default Home;