import React from 'react';
import {ResponsiveContainer, LineChart, Legend, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ShowStatistics = ({name, total}) => {
    const data = [
        { "name": `${name[0]}`, "Question": `${total[0]}`},
        { "name": `${name[1]}`, "Question": `${total[1]}`},
        { "name": `${name[2]}`, "Question": `${total[2]}`},
        { "name": `${name[3]}`, "Question": `${total[3]}`}
    ]
    
    return (
        <>
            <div className='bg-gray-900 md:px-40 py-12 flex justify-center'>
                <ResponsiveContainer className="mr-10" width={`90%`} height={300}>
                <LineChart  data={data}
                    margin={{ top: 5, right: 10, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Question" stroke="#8884d8" />
                </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default ShowStatistics;