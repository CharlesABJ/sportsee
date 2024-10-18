import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

type PieChartCardProps = {
    dataPieChartCard: {
        data: number;
        label: string;
    }
}

function PieChartCard({ dataPieChartCard = { data: 0, label: "" } }: PieChartCardProps) {

    let dataPercent = dataPieChartCard.data * 100;

    const chartData = [
        { value: dataPieChartCard.data * 2 },    // 100% de la valeur
        { value: 1 - dataPieChartCard.data * 2 } // Partie restante
    ];

    return (
        <div className="PieChartCard">
            <h2><span>{`${dataPercent}%`}</span><p className='label'>{dataPieChartCard.label}</p></h2>

            <ResponsiveContainer className="bg-color7" width="100%" height={250}>
                <PieChart>

                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}  // Taille extérieure du donut
                        innerRadius={85}   // Trou intérieur pour l'effet donut
                        startAngle={90}    // Début à 90° si nécessaire
                        endAngle={270}    // ≠ Sens horaire
                        cornerRadius={10} // Rayon des coins


                    >
                        <Cell fill="#FF0000" stroke='none' />
                        <Cell fill="transparent" stroke='none' />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieChartCard;