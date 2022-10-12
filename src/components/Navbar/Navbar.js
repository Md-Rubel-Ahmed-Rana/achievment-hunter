import React, { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Logo from "../../images/logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
        setOpen(!open)
    }

   const  style = ({ isActive }) => {
    return {
        textDecoration: isActive ? "underline" : null,
        color: isActive ? "red" : null,
    };
}
    return (
        <div className='bg-[#1e2b47] md:flex md:justify-between justify:center items-center text-center py-3 px-10 md:px-40 border-b'>
            <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-4'>
                    <img className='w-12 h-12 rounded-full' src={Logo} alt="logo" />
                    <h3 className='md:text-3xl text-white text-xl font-bold'>Achievment Hunter</h3>
                </div>
                <div onClick={handleOpen} className='md:hidden cursor-pointer text-white text-2xl'>
                    {
                        open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />
                    }
                </div>
            </div>
            <nav className={`${open ? "hidden md:block text-white mt-3" : null}`}>
                <NavLink style={style} to="/home" className="md:text-2xl text-lg font-semi-bold md:px-2 text-white mx-2">Home</NavLink>
                <NavLink style={style} to="/quizes" className="md:text-2xl font-semi-bold text-lg md:px-2 text-white mx-2">Quizes</NavLink>
                <NavLink style={style} to="/statistics" className="md:text-2xl font-semi-bold text-lg md:px-2 text-white mx-2">Statistics</NavLink>
                <NavLink style={style} to="/blogs" className="md:text-2xl font-semi-bold text-lg md:px-2 text-white mx-2">Blogs</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;