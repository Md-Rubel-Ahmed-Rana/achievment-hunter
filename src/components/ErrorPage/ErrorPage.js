import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className='bg-indigo-200 text-center shadow-lg w-3/4 md:w-2/6 rounded-xl p-10 mt-20 m-auto'>
            <h3 className='md:text-2xl text-xl font-bold mb-4'>Page Not Found: ERROR 404</h3>
            <p className='mb-2 font-bold'>Oops. The page you request is not match any route. Please try with correct URL.</p>
            <button className='bg-blue-900 py-2 px-6 text-white rounded-lg font-bold text-center mx-auto'>
                <Link to="/home">Back To Home</Link>
             </button>
        </div>
    );
};

export default ErrorPage;