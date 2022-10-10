import React from 'react';
import BannerImg  from "../../images/banner.png"


const MainHeader = () => {
    return (
        <div className='md:flex justify-between gap-10 mb-5 py-3'>
            <div>
                <img style={{width: "900px"}} className='md:mr-10 h-40' src={BannerImg} alt="" />
            </div>
            <div className="my-2">
                <h2 className='md:text-4xl mb-2 text-2xl text-white'>Boost Your Coding Productibity</h2>
                <p className='text-white md:text-2xl'>Welcome to our coding chellage website. This is the world class website where you can judge your coding level. So, take a chellage right now! Best of luck.</p>
            </div>
        </div>
    );
};

export default MainHeader;