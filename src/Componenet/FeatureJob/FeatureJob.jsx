import React, { useEffect, useState } from 'react';
import FeatureJobs from './FeatureJobs';

const FeatureJob = () => {
    const [jobs,setjobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json').then(res=>res.json()).then(data=>setjobs(data));
    },[]);
    return (
        <div>
            <div className='text-center '>
                <h1 className='t text-5xl font-extrabold mt-20'>Featured Jobs : {jobs.length}</h1>
                <p className='text-base text-gray-400 my-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
                    {jobs.map((job,idx)=><FeatureJobs key={idx} job={job}/>)}
                </div>
            </div>
        </div>
    );
};

export default FeatureJob;