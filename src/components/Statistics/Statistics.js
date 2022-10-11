import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowStatistics from './ShowStatistics';


const Statistics = () => {
    const ChartData = useLoaderData().data;
    const name = []
    const total = []
    return (
        <div>
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
