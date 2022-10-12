import React from 'react';
import BannerImg  from "../../images/banner.png"


const Header = () => {
    return (
        <div className='md:flex bg-gray-800 justify-between gap-10  md:py-20 py-5 mb-6 px-3 rounded-md'>
            <div>
                <img style={{width: "900px"}} className='md:mr-10 h-40' src={BannerImg} alt="" />
            </div>
            <div className="my-2">
                <h2 className='md:text-4xl mb-2  text-white'>Boost Your Coding Productibity</h2>
                <p className='text-white text-sm md:text-2xl'>Welcome to our coding chellage website. This is the world class website where you can judge your coding level. So, take a chellage right now! Best of luck.</p>
            </div>
        </div>
    );
};

export default Header;