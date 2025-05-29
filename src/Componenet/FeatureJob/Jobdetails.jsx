import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineCurrencyDollar, HiOutlineMail } from 'react-icons/hi';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { PiSubtitles } from 'react-icons/pi';
import { useLoaderData, useParams } from 'react-router-dom';

const Jobdetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intID = parseInt(id);
    const job = jobs.find(job => job.id === intID);
    console.log(id, job);
    return (
        <div className='text-center my-20'>
            <h2 className='text-3xl font-extrabold py-15'>Job Details</h2>
            <div className=' md:flex  items-center gap-10   px-10'>
                {/* left side */}
                <div className='w-2/3 text-start px-5  space-y-4'>
                    <h1 className='flex gap-2 items-center'>
                       <span className='font-bold'> Job Description:</span>
                        <span className='text-base text-gray-500'>{job.job_description}</span>
                    </h1>

                    <h1 className='flex gap-2'>
                        <span className='font-bold mb-2'>Job Responsibility:</span>
                        <span className='text-base text-gray-500'>{job.job_responsibility}</span>
                    </h1>

                    <h1 className='flex flex-col'>
                        <span className='font-bold mb-2'>Educational Requirements:</span>
                        <span className='text-base text-gray-500'>{job.educational_requirements}</span>
                    </h1>

                    <h1 className='flex gap-2'>
                        <span className='font-bold '>Experiences:</span>
                        <span className='text-base text-gray-500'>{job.experiences}</span>
                    </h1>
                </div>

                {/* right Side */}
                <div className='1/3 text-center px-2 py-3'>
                    <div className=' bg-gray-700 px-8 py-5 mb-5 rounded-xl   '>
                        <h1  className='text-start py-2 font-extrabold text-xl'>Job Details</h1>
                    <hr className='text-gray-400'/>
                    <div>
                        <p className='text-lg flex  items-center gap-2 py-2'><HiOutlineCurrencyDollar />Salary :<span className='text-base'>{job.salary}</span></p>
                        
                        <p className='text-lg flex items-center gap-2 py-2'> <PiSubtitles />Title : <span className='text-base'>{job.job_title}</span></p>
                    </div>
                    <h1 className='text-start py-2'>Contact Information</h1>
                    <hr className='text-gray-400'/>
                    <h1 className='flex items-center gap-2'><MdOutlineLocalPhone />Phone : {job.contact_information.phone}</h1>
                    <h1 className='flex items-center gap-2'><HiOutlineMail /> Email : {job.contact_information.email}</h1>
                    <h1 className='flex items-center gap-2'><CiLocationOn />Address : {job.contact_information.address}</h1>
                    </div>
                    <div className='w-full bg-purple-600 rounded-xl px-7 py-4 active:scale-95 hover:cursor-pointer'><button>Apply Now</button></div>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;