import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-4xl bg-black text-white text-center pt-4'>Gain more knowladge on ReactJs</h2>
            <div className='md:grid md:grid-cols-3 justify-center gap-3 bg-black text-white py-20 md:px-20 px-3'>
                <div className="p-6 rounded-md shadow-md bg-gray-900 dark:text-gray-50 mb-2">
                    <h2 className="text-2xl font-semibold tracking-wide">What is the purpose of react router?</h2>
                    <p className="text-gray-100">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className="p-6 rounded-md shadow-md bg-gray-900 dark:text-gray-50 mb-2">
                    <h2 className="text-2xl font-semibold tracking-wide">How does context api work?</h2>
                    <p className="dark:text-gray-100">The React Context API is a way for a React app to effectively produce global variables that can be passed around the application. This is the best way to avoid "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management.</p>
                </div>
                <div className="p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
                    <h2 className="text-2xl font-semibold tracking-wide">What is useRef hook in react</h2>
                    <p className="dark:text-gray-100">The useRef Hook means use Reference. It allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It is used to access a DOM element directly.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;