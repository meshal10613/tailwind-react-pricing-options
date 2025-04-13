import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    { "id": 1, "name": "Aarav", "physics": 85, "chemistry": 78, "math": 92 },
    { "id": 2, "name": "Isha", "physics": 67, "chemistry": 72, "math": 81 },
    { "id": 3, "name": "Rohan", "physics": 91, "chemistry": 89, "math": 95 },
    { "id": 4, "name": "Neha", "physics": 74, "chemistry": 68, "math": 77 },
    { "id": 5, "name": "Kabir", "physics": 88, "chemistry": 83, "math": 90 },
    { "id": 6, "name": "Simran", "physics": 69, "chemistry": 71, "math": 73 },
    { "id": 7, "name": "Vivaan", "physics": 94, "chemistry": 86, "math": 89 },
    { "id": 8, "name": "Ananya", "physics": 77, "chemistry": 79, "math": 84 },
    { "id": 9, "name": "Dev", "physics": 82, "chemistry": 75, "math": 80 },
    { "id": 10, "name": "Meera", "physics": 90, "chemistry": 88, "math": 93 }
];

const ResultChart = () => {
    return (
        <div>
            <LineChart className='w-10/12 mx-auto' width={800} height={300} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="physics" stroke='red'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
                <Line dataKey="math"></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;