import React from 'react';
import userImage from '../../assets/images/user.png'
const Banner = () => {
    return (
        <section className='md:flex items-center '>
           <div className='w-2/5 px-3'>
                <h1 className='font-extrabold text-7xl mb-5'>One Step Closer To Your <span className='text-purple-600'>Dream Job</span></h1>
                <p className='text-lg text-gray-400 font-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn bg-purple-600 mt-8 rounded-lg'>Get Started</button>
           </div>
           <div className='w-3/5 px-5 py-5 '>
            <img src={userImage} alt="Hero image" />
           </div>
        </section>
    );
};

export default Banner;