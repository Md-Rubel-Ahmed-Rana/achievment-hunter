import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/quizes">Quizes</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
};

export default Header;