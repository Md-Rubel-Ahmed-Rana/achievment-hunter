import React from 'react';
import Options from './Options';

const Questions = ({ singleQuestion }) => {
    const { question, options, correctAnswer }  = singleQuestion
    console.log("Answer", correctAnswer);
    
    return (
        <div className='border my-2 p-4'>
            <h3 className='text-2xl px-2 text-white mb-5'><strong>Question:</strong> {question}</h3>
            <div className='grid grid-cols-2  mx-auto'>
                {
                    options.map((option, index) => <Options option={option} key={index} correctAnswer={correctAnswer} />)
                }
            </div>
        </div>
    );
};

export default Questions;