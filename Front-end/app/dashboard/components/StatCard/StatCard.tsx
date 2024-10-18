import Image from 'next/image';
type dataStatCard = {
    iconColor: string;
    iconSrc: string;
    stat: any;
    label: string;
}
function StatCard({ dataStatCard }: { dataStatCard: dataStatCard }) {
    return (
        <div className='StatCard'>
            <div className={`icon bg-${dataStatCard.iconColor}`}>
                <Image src={dataStatCard.iconSrc} width={30} height={30} alt={dataStatCard.label} />
            </div>

            <div className="content">
                <div className="stat">{dataStatCard.stat}</div>
                <div className="label">{dataStatCard.label}</div>
            </div>

        </div >
    );
}

export default StatCard;