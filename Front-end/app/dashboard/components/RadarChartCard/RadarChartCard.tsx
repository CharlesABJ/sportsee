import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

type RadarChartCardProps = {
    dataRadarChartCard: {
        data: any;
        kind: any;
    }
}

function RadarChartCard({ dataRadarChartCard }: RadarChartCardProps) {
    const formatData = dataRadarChartCard.data.map((item: any) => {
        return { ...item, kind: dataRadarChartCard.kind[item.kind] };
    });

    return (
        <ResponsiveContainer className="RadarChartCard bg-color5-pale">
            <RadarChart outerRadius={100} width={730} height={250} data={formatData}>
                <PolarGrid radialLines={false} />

                <PolarAngleAxis dataKey="kind" tick={{ fill: '#fff' }} />
                <PolarRadiusAxis angle={30} domain={[0, 'dataMax + 20']} tick={false} axisLine={false} />
                <Radar name="performance" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default RadarChartCard;