import React from 'react';
import { NavLink ,Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <h1>Opps! </h1>
            <Link to='/' >Back</Link>
        </div>
    );
};

export default Errorpage;