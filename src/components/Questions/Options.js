import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, checkAnswer }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <div onClick={() => checkAnswer(option, toast)} className='bg-white flex items-center gap-2 m-2 p-5 text-black rounded-lg hover:bg-slate-500 hover:text-white'>
                <input  type="radio" name="" id="" className='cursor-pointer bg-blue-500' />
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