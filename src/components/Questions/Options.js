import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, checkAnswer }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <div className='bg-white flex items-center gap-2 m-2 p-5 text-black rounded-lg'>
                <input onClick={() => checkAnswer(option, toast)} type="radio" name="option" id="" className='cursor-pointer' />
                <label className='md:text-xl m-2'>{option}</label>
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