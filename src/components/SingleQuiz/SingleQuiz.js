import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const SingleQuiz = () => {
    const quiz = useLoaderData();
    const {name, questions} = quiz.data;

    return (
        <div className='bg-slate-600 py-10 md:px-40'>
            <h3 className='text-white text-center text-4xl mb-5'>Quiz of {name}</h3>
            <h4 className='text-3xl text-white text-center'>Total QUestions: {questions.length}</h4>
            <div>
                {
                    questions.map((singleQuestion, serial) => <Questions singleQuestion={singleQuestion} serial={serial} key={singleQuestion.id}/>)
                }
            </div>
        </div>
    );
};

export default SingleQuiz;