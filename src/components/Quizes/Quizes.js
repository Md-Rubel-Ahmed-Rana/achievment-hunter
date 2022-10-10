import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuiz from './DisplayQuiz';

const Quizes = () => {
    const {data} = useLoaderData();
    return (
            <div className='flex justify-between gap-4 bg-black py-5 px-40'>
                {
                    data.map((quiz) => <DisplayQuiz quiz={quiz} key={quiz.id} />)
                }
            </div>
    );
};

export default Quizes;