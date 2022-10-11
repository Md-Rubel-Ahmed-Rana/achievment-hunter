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
        <div className='grid grid-cols-1'>
            <div onClick={() => checkAnswer(option)} className='bg-white m-2 p-5 text-black rounded-lg cursor-pointer'>
                 <input type="radio" name="option" id="" className='cursor-pointer' />
                <label className='text-xl m-2'>{option}</label>
            </div>
            
            <ToastContainer
                position= "top-center"
                autoClose= {2000}
                hideProgressBar= {false}
                closeOnClick= {true}
                pauseOnHover= {false}
                draggable= {true}
                progress= "undefined"
                theme= "light"
            />
        </div>
    );
};

export default Options;