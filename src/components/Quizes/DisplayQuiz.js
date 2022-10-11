import React from 'react';
import { Link } from 'react-router-dom';

const DisplayQuiz = ({quiz}) => {
    const {id, logo, name, total} = quiz;

    return (
        <div>
            <div className='bg-gray-900 text-center p-4 rounded-lg mb-2 '>
                <img src={logo} alt="" className='w-80 h-48 border-b pb-3 mx-auto' />
                <div className='flex justify-between text-white md:px-2 px-10 py-1'>
                    <h4>{name}</h4>
                    <p>Total Quiz: {total}</p>
                </div>
                <Link to={`/quizes/${id}`} className='text-white py-3  text-center'>
                    <button className='text-2xl mt-3  bg-blue-900 px-4 rounded-lg flex items-center gap-2 outline-none py-2'>
                        Start Practice
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DisplayQuiz;