import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const FeatureJobs = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
    return (
        <div className='flex flex-col items-start  border border-gray-500 px-10 py-8 rounded-xl '>
            <img className='size-12 mb-2' src={logo} alt={`${company_name} `}  />
             <h1 className='text-2xl font-semibold '>{job_title}</h1>
             <h5 className='text-xl font-semibold text-gray-400'>{company_name}</h5>
             <div className='flex gap-5 mt-3'>
                <p className='border border-purple-600 px-4 py-2 rounded-lg '>{remote_or_onsite}</p>
                <p className='border border-purple-600 px-4 py-2 rounded-lg '>{job_type}</p>
             </div>
             <div className='flex items-center mt-5 gap-4'>
                <h1 className='flex items-center'>
                    <CiLocationOn className='size-6 mr-2'/>
                    {location}
                </h1>
                <h1 className='flex items-center'>
                    <RiMoneyDollarCircleLine  className='mr-2'/>
                    {salary}
                </h1>

             </div>
             <Link to={`/job/${id}`}><button className='btn mt-5'>View Details</button></Link>

        </div>
    );
};

export default FeatureJobs;