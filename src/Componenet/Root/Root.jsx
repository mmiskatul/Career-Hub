import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <h1>this is root</h1>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;