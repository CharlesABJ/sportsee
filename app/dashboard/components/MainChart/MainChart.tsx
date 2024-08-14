import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
interface dataMainChart {
    width: number;
    height: number;
    data: any;
    datakey: string;
    datakey2?: string;
}


function MainChart({ dataMainChart }: { dataMainChart: dataMainChart }) {
    return (
        <ResponsiveContainer className="MainChart bg-color7">
            <BarChart width={dataMainChart.width} height={dataMainChart.height} data={dataMainChart.data}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="day" />
                <YAxis orientation='right' tick={true} />
                <Tooltip />
                <Bar dataKey={dataMainChart.datakey} fill="#282D30" barSize={7} radius={[5, 5, 0, 0]} />
                {dataMainChart.datakey2 ? <Bar dataKey={dataMainChart.datakey2} fill="#E60000" radius={[5, 5, 0, 0]} barSize={7} /> : ""}

            </BarChart>
        </ResponsiveContainer>
    );
}

export default MainChart;