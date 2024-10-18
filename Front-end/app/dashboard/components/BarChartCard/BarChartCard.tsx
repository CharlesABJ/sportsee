import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
type BarChartCardProps = {
    dataBarChartCard: {
        width: number;
        height: number;
        data: any;
        datakey: string;
        datakey2?: string;
    }
}


function BarChartCard({ dataBarChartCard }: BarChartCardProps) {

    const formatData = dataBarChartCard.data.map((session: any) => {
        const day = Number(session.day.split('-')[2]);
        return { ...session, day: day };
    });

    const CustomTooltip = ({ active = false, payload = [] }: { active: boolean, payload: any }) => {
        if (active && payload && payload.length) {
            return (
                <div className='tooltip'>
                    <p>{`${payload[0].value}kg`} </p>
                    <p>{`${payload[1].value}kcal`}</p>
                </div>
            );
        }
    };

    const CustomLegend = ({ payload }) => {
        return (
            <ul className='legend'>
                {
                    payload.map((entry, index) => (
                        <li className='legend-item'>
                            <div className='p' style={{
                                color: payload[index].color

                            }}>
                                ●

                            </div>
                            <span>{entry.value} ({entry.value === "kilogram" ? "kg" : "kCal"})</span>
                        </li>
                    ))

                }
            </ul>
        );
    }

    return (
        <div className="BarChartCard ">
            <h2>Activité quotidienne</h2>

            <ResponsiveContainer className="bg-color7">
                <BarChart width={dataBarChartCard.width} height={dataBarChartCard.height} data={formatData}>

                    <CartesianGrid strokeDasharray="2 2" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis orientation='right' tick={true} tickLine={false} axisLine={false} />
                    <Tooltip
                        content={<CustomTooltip active={false} payload={formatData} />}
                        wrapperStyle={{ outline: 'none' }}
                        cursor={{ opacity: 0.5 }}
                    />
                    <Bar dataKey={dataBarChartCard.datakey} fill="#282D30" barSize={7} radius={[5, 5, 0, 0]} />
                    {dataBarChartCard.datakey2 ? <Bar dataKey={dataBarChartCard.datakey2} fill="#E60000" radius={[5, 5, 0, 0]} barSize={7} /> : ""}

                    <Legend verticalAlign="top" width={240} align="right" height={36} content={<CustomLegend />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChartCard;