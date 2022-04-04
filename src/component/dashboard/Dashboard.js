import './Dashboard.css'
import React from 'react';
import useChartData from '../hooks/useChartData';
import {BarChart, Legend, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Dashboard = () => {
    const [chartInfo, setChartInfo] = useChartData();
    console.log(chartInfo);
    return (
        <div className='dashboardContainer'>
            <div className="chart">
                <h2>Our Investment</h2>
                <LineChart width={600} height={300} data={chartInfo} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            <div className="chart">
                <h2>Our Revenue</h2>
                <BarChart width={600} height={300} data={chartInfo}>
                    <XAxis dataKey="month" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="revenue" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;