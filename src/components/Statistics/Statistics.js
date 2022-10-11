import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowStatistics from './ShowStatistics';


const Statistics = () => {
    const ChartData = useLoaderData().data;
    const name = []
    const total = []
    return (
        <div className='py-20 px-10 text-center'>
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
