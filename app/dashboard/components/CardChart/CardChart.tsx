import React from 'react';
import './_CardChart.scss';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
interface dataCardChart {
    width: number;
    height: number;
    data: any;
}


function CardChart({ dataCardChart }: { dataCardChart: dataCardChart }) {
    return (
        <ResponsiveContainer width={dataCardChart.width} height={dataCardChart.height}>
            <LineChart data={dataCardChart.data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>

        </ResponsiveContainer>
    );
}

export default CardChart;