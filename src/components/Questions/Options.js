import React from 'react';

const Options = ({option}) => {
    console.log(option);
    return (
        <div>
            <p className='bg-emerald-600 m-2 p-5 text-white rounded-lg'>
                <small> <input type="radio" name="" id="" /> </small>
                <small className='text-xl'>{option}</small>
            </p>
        </div>
    );
};

export default Options;