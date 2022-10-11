import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import DisplayQuiz from '../Quizes/DisplayQuiz';

const Home = () => {
    const {data} = useLoaderData();

    return (
        <div className='bg-black py-5 md:px-40 px-10'>
            <div>
                <Header />
            </div>
            <div className='md:flex justify-between  gap-4'>
                {
                    data.map((quiz) => <DisplayQuiz quiz={quiz} key={quiz.id} />)
                }
             </div>
        </div>
    );
};

export default Home;