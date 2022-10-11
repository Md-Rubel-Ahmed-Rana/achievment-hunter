import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const SingleQuiz = () => {
    const [correct, setCorrect] = useState(0);
    const [notCorrect, setNotCorrect] = useState(0);
    const quiz = useLoaderData();
    const {name, questions} = quiz.data;

    return (
        <div className='bg-slate-600 py-10 md:px-40'>
            <div className='md:flex justify-between'>
                <div className='md:ml-96'>
                    <h3 className='text-white text-center text-4xl mb-2'>Quiz of {name}</h3>
                    <h4 className='text-3xl text-white text-center mb-3'>Total Questions: {questions.length}</h4>
                </div>
                <div className='text-center'>
                    <h6 className='text-2xl text-white'>Total Correct: {correct}</h6>
                    <h6 className='text-2xl text-white'>Total Wrong: {notCorrect}</h6>
                </div>
            </div>
            <div>
                {
                    questions.map((singleQuestion, serial) => <Questions 
                    singleQuestion={singleQuestion} 
                    serial={serial} 
                    correct={correct} 
                    setCorrect={setCorrect}
                    notCorrect={notCorrect}
                    setNotCorrect={setNotCorrect} 
                    key={singleQuestion.id}/>)
                }
            </div>
        </div>
    );
};

export default SingleQuiz;