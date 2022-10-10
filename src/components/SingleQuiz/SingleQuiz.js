import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const SingleQuiz = () => {
    const quiz = useLoaderData();
    const {name, questions} = quiz.data;

    return (
        <div className='bg-slate-600 py-10 md:px-40'>
            <h3 className='text-white text-center text-4xl mb-5'>Quiz of {name}</h3>
            <div>
                {
                    questions.map((singleQuestion) => <Questions singleQuestion={singleQuestion} key={singleQuestion.id}/>)
                }
            </div>
        </div>
    );
};

export default SingleQuiz;