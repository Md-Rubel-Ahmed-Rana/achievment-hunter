import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctAnswer }) => {


    const checkAnswer = (answer) => {
        if (answer === correctAnswer){
            toast("Your Answer is currect")
        }else{
            toast("Your Answer is not currect")
        }
    }
    return (
        <div>
            <p onClick={() => checkAnswer(option)} className='bg-emerald-600 m-2 p-5 text-white rounded-lg cursor-pointer'>
                <small> <input type="radio" name="" id="" /> </small>
                <small className='text-xl'>{option}</small>
            </p>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Options;