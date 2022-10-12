import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowStatistics from './ShowStatistics';


const Statistics = () => {
    const ChartData = useLoaderData().data;
    const name = []
    const total = []
    return (
        <div>
            <h3 className='md:text-3xl text-xl text-white bg-gray-900 text-center pt-10'>Total Questions on a Topic.</h3>
            {
                ChartData.forEach(topic => {
                    total.push(topic.total)
                    name.push(topic.name)
                }) 
            }
            <ShowStatistics name={name} total={total} />
        </div>
    );
};

export default Statistics;
