import React from 'react';
import { Link } from 'react-router-dom';

const DisplayQuiz = ({quiz}) => {
    const {id, logo, name, total} = quiz;

    return (
        <div className='bg-blue-900 p-4 rounded-lg mb-2 '>
            <img src={logo} alt="" className='w-80 h-48 border-b pb-3 mx-auto' />
            <div className='flex justify-between text-white px-2 py-1'>
                <h4>{name}</h4>
                <p>Total Quiz: {total}</p>
            </div>
            <Link to={`/quizes/${id}`} className='text-white bg-black py-3 px-8 mt-2 rounded-lg text-center'>
                <button className='text-2xl outline-none py-3'>Start Practice</button>
            </Link>
        </div>
    );
};

export default DisplayQuiz;