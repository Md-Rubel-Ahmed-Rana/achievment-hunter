import React from 'react';
import { LineChart, Legend, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ShowStatistics = ({name, total}) => {
    const data = [
        { "name": `${name[0]}`, "Question": `${total[0]}`},
        { "name": `${name[1]}`, "Question": `${total[1]}`},
        { "name": `${name[2]}`, "Question": `${total[2]}`},
        { "name": `${name[3]}`, "Question": `${total[3]}`}
    ]
    
    return (
        <div className='bg-gray-900 px-40 py-28 flex justify-center'>
            <LineChart  width={400} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Question" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default ShowStatistics;