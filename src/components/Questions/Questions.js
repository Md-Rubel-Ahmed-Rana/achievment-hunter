import React from 'react';
import Options from './Options';
import swal from 'sweetalert';


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
    const showAnswer = () => {
        swal("Correct Answer is: " , correctAnswer)
    }
    return (
        <div className='border rounded-md my-2 p-4'>
            <div className='flex justify-between'>
                <h3 className='md:text-2xl text-xl px-2 text-white mb-5'><strong>Question-{serial + 1}:</strong> {question}</h3>

                <div title='See correct answer' >
                    <svg onClick={showAnswer}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer  bg-blue-900 text-white rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </div>

            <div className='grid md:grid-cols-2  mx-auto p-2'>
                {
                    options.map((option, index) => <Options option={option} key={index} correctAnswer={correctAnswer} checkAnswer={checkAnswer} />)
                }
            </div>
        </div>
    );
};

export default Questions;