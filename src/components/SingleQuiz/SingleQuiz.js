import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const SingleQuiz = () => {
    const [correct, setCorrect] = useState(0);
    const [notCorrect, setNotCorrect] = useState(0);
    
    const quiz = useLoaderData();
    const {name, questions} = quiz.data;

    return (
        <div className='bg-black py-10 md:px-40'>
            <div className='md:flex justify-between items-center'>
                <div className='md:ml-96'>
                    <h3 className='text-white text-center text-4xl mb-2'>Quiz of {name}</h3>
                    <h4 className='text-4xl text-white text-center mb-3'>Total Quiz: {questions.length}</h4>
                </div>
                <div className='text-center bg-blue-900 md:p-5 md:mr-10 mx-20 py-2 rounded-xl'>
                    <h6 className='text-2xl text-white'>Correct Answer: {correct}</h6>
                    <h6 className='text-2xl text-white'>Incorrect Answer: {notCorrect}</h6>
                </div>
            </div>
            <div className='md:p-10'>
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