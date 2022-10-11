import React from 'react';
import { LineChart, Legend, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ShowStatistics = ({name, total}) => {
    const data = [
        { "name": `${name[0]}`, "Topics": `${total[0]}`},
        { "name": `${name[1]}`, "Topics": `${total[1]}`},
        { "name": `${name[2]}`, "Topics": `${total[2]}`},
        { "name": `${name[3]}`, "Topics": `${total[3]}`}
    ]
    return (
        <div className='flex justify-center bg-gray-900 py-28 px-'>
            <LineChart  width={400} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Topics" stroke="#ffffff" />
            </LineChart>
        </div>
    );
};

export default ShowStatistics;