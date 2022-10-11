import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuiz from './DisplayQuiz';

const Quizes = () => {
    const {data} = useLoaderData();
    return (
        <div className=' bg-black'>
            <h3 className='text-white text-center text-2xl md:text-4xl font-bold pt-4'>Choose Your Best Option</h3>
            <div className='md:flex justify-between gap-4 md:py-20 py-5 md:px-40 px-10'>
                {
                    data.map((quiz) => <DisplayQuiz quiz={quiz} key={quiz.id} />)
                }
            </div>
        </div>
    );
};

export default Quizes;