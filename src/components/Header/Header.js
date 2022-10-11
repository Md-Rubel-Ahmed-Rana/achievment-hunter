import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../images/logo.png";

const Header = () => {
   const  style = ({ isActive }) => {
    return {
        textDecoration: isActive ? "underline" : null,
        color: isActive ? "red" : null
    };
}
    return (
        <div className='bg-[#1e2b47] md:flex md:justify-between justify:center items-center text-center py-3 px-10 border-b'>
            <div className='flex items-center gap-4'>
                <img className='w-12 h-12 rounded-full' src={Logo} alt="logo" />
                <h3 className='md:text-3xl text-white text-xl font-bold'>Achievment Hunter</h3>
            </div>
            <nav className='text-white flex gap-3'>
                <NavLink style={style} to="/home" className="md:text-2xl text-xl">Home</NavLink>
                <NavLink style={style} to="/quizes" className="md:text-2xl text-xl">Quizes</NavLink>
                <NavLink style={style} to="/statistics" className="md:text-2xl text-xl">Statistics</NavLink>
                <NavLink style={style} to="/blogs" className="md:text-2xl text-xl">Blogs</NavLink>
            </nav>
        </div>
    );
};

export default Header;