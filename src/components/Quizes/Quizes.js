import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuiz from './DisplayQuiz';

const Quizes = () => {
    const {data} = useLoaderData();
    return (
            <div className='md:flex justify-between gap-4 bg-black md:py-20 py-5 md:px-40 px-10'>
                {
                    data.map((quiz) => <DisplayQuiz quiz={quiz} key={quiz.id} />)
                }
            </div>
    );
};

export default Quizes;