import React, { useEffect, useState } from 'react';
import FeatureJobs from './FeatureJobs';

const FeatureJob = () => {
    const [jobs,setjobs]=useState([]);
    const [datalength,setDataLength]=useState(4);
    useEffect(()=>{
        fetch('jobs.json').then(res=>res.json()).then(data=>setjobs(data));
    },[]);
  
    return (
        <div>
            <div className='text-center '>
                <h1 className='t text-5xl font-extrabold mt-20'>Featured Jobs : {jobs.length}</h1>
                <p className='text-base text-gray-400 my-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
                    {jobs.slice(0,datalength).map((job,idx)=><FeatureJobs key={idx} job={job}/>)}
                </div>
                <div className={datalength ===jobs.length && 'hidden' }>
                    <button onClick={()=>setDataLength(jobs.length)} className='btn my-8 bg-purple-600 text-xl text-black hover:bg-purple-400 active:scale-95 rounded-lg px-8 py-6 font-bold'>See More</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureJob;