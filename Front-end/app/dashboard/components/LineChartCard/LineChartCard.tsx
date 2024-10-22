import { Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

/**
 * Définition de l'type pour les props du composant LineChartCard.
 */
type LineChartCardProps = {
    dataLineChartCard: {
        background: string;
        data: any;
        datakey: string;
        label: string;
    }
}

/**
 * Composant fonctionnel LineChartCard.
 * @param {object} dataLineChartCard - Les données nécessaires pour le graphique.
 */
function LineChartCard({ dataLineChartCard }: LineChartCardProps) {
    /**
     * Tableau des jours de la semaine.
     */
    const weekday = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

    /**
     * Formatage des données pour le graphique.
     */
    const dataFormatted = dataLineChartCard.data.map((item: any) => {
        return {
            day: weekday[item.day - 1],
            sessionLength: item.sessionLength
        }
    })

    /**
     * Composant CustomTooltip pour afficher une infobulle personnalisée.
     * @param {boolean} active - Indique si l'infobulle est active.
     * @param {array} payload - Les données à afficher dans l'infobulle.
     */
    const CustomTooltip = ({ active = false, payload = [] }: { active?: boolean, payload?: any }) => {
        if (active && payload && payload.length) {
            return (
                <div className='tooltip bg-color6 text-color5' >
                    <p>{`${payload[0].value}min`} </p>
                </div>
            );
        }
        return null;
    };

    /**
     * Composant CustomCursor pour afficher un curseur personnalisé.
     * @param {array} points - Les données du point où se trouve le curseur.
     */
    const CustomCursor = ({ points }: { points?: any, }) => {
        const { x } = points[0]; // Récupération de la position x du curseur.
        return (
            <Rectangle
                fill="#E60000"
                stroke="#E60000"
                x={x}
                y={0}
                width={400}
                height={300}
                style={{ transition: '0.1s' }} // Rajouter une transistion pour l'animation du curseur.

            />
        );
    };

    /**
     * Rendu du composant LineChartCard.
     */
    return (
        <div className="LineChartCard">
            <h2>{dataLineChartCard.label}</h2>
            <ResponsiveContainer className={` ${dataLineChartCard.background}`}>
                <LineChart data={dataFormatted} width={730} height={250} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
                    <XAxis tick={{ fill: '#fff', opacity: 0.7 }} dataKey="day" tickLine={false} axisLine={false} />
                    <YAxis type="number" hide domain={['dataMin - 10', 'dataMax + 30']} />
                    <defs>
                        <linearGradient id="colorUv" x="0" x2="1.0">
                            <stop offset="0%" stopColor="#fff" stopOpacity={0.3} />
                            <stop offset="70%" stopColor="#fff" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Line strokeOpacity={1} activeDot={{ r: 5, fill: '#fff', stroke: 'rgb(255 255 255 / 30%)', strokeWidth: 8 }}
                        type="monotone" dataKey={dataLineChartCard.datakey} stroke="url(#colorUv)" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

/**
 * Exportation du composant LineChartCard par défaut.
 */
export default LineChartCard;