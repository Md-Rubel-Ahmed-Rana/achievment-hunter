import React from 'react';
import Options from './Options';


const Questions = ({ singleQuestion, serial, correct, setCorrect, notCorrect, setNotCorrect }) => {
    const { question, options, correctAnswer }  = singleQuestion;
    const checkAnswer = (answer, toast) => {
        if (answer === correctAnswer) {
            toast("Your Answer is currect");
            setCorrect(correct + 1)
        } else {
            toast("Your Answer is not currect");
            setNotCorrect(notCorrect + 1)
        }
    }
    return (
        <div className='border rounded-md my-2 p-4'>
            <h3 className='text-2xl px-2 text-white mb-5'><strong>Question-{serial + 1}:</strong> {question}</h3>
            <div className='grid md:grid-cols-2  mx-auto p-2'>
                {
                    options.map((option, index) => <Options option={option} key={index} correctAnswer={correctAnswer} checkAnswer={checkAnswer} />)
                }
            </div>
        </div>
    );
};

export default Questions;