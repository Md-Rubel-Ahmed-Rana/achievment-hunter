import React from 'react';
import Options from './Options';

const Questions = ({ singleQuestion, serial }) => {
    const { question, options, correctAnswer }  = singleQuestion
    return (
        <div className='border rounded-md my-2 p-4'>
            <h3 className='text-2xl px-2 text-white mb-5'><strong>Question-{serial + 1}:</strong> {question}</h3>
            <div className='grid md:grid-cols-2  mx-auto p-2'>
                {
                    options.map((option, index) => <Options option={option} key={index} correctAnswer={correctAnswer} />)
                }
            </div>
        </div>
    );
};

export default Questions;