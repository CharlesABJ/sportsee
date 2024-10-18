'use client';
import WelcomeText from '@/app/_components/WelcomeText/WelcomeText';
import { useActivity, useAverageSessions, usePerformance, useScore } from '@/app/_hooks/callServices';
import BarChart from '../components/BarChartCard/BarChartCard';
import LineChartCard from '../components/LineChartCard/LineChartCard';
import PieChartCard from '../components/PieChartCard/PieChartCard';
import RadarChartCard from '../components/RadarChartCard/RadarChartCard';
import SideBar from '../components/SideBar/SideBar';
import StatCard from '../components/StatCard/StatCard';

function Dashboard({ params }: { params: { id: string } }) {
    const { id } = params;
    const userId = Number(id);

    // Utilisation des hooks personnalisés
    const { data: userData, loading: loadingUser, error: errorUser } = useScore(userId);
    const { data: userActivity, loading: loadingActivity, error: errorActivity } = useActivity(userId);
    const { data: userAverageSessions, loading: loadingSessions, error: errorSessions } = useAverageSessions(userId);
    const { data: userPerformance, loading: loadingPerformance, error: errorPerformance } = usePerformance(userId);



    if (loadingUser || loadingActivity || loadingSessions || loadingPerformance) {
        return <div>Loading...</div>;
    }

    if (errorUser || errorActivity || errorSessions || errorPerformance) {
        return <Error404 />
    }

    if (!userData || !userData.data || !userData.data.userInfos) {
        return <div className='not-found'>Pas de données pour cet utilisateur</div>;
    }
    return (
        <div className='Dashboard'>
            <SideBar />

            <div className="contain">
                <WelcomeText dataWelcomeText={{ firstName: userData?.data.userInfos.firstName, isSucceed: true }} />

                <div className="charts-and-stats">
                    <div className="charts-zone">
                        <BarChart dataBarChartCard={{
                            width: 800,
                            height: 400,
                            data: userActivity.data.sessions,
                            datakey: 'calories',
                            datakey2: 'kilogram'
                        }} />

                        <div className="card-charts-zone">
                            <LineChartCard dataLineChartCard={{ background: 'bg-color3', data: userAverageSessions.data.sessions, datakey: 'sessionLength', label: "Durée moyenne des sessions" }} />

                            <RadarChartCard dataRadarChartCard={{ data: userPerformance.data.data, kind: userPerformance.data.kind }} />

                            <PieChartCard dataPieChartCard={{ data: userData.data.score || userData.data.todayScore || 0, label: "de votre objectif" }} />
                        </div>
                    </div>

                    <div className="stats-zone">
                        <StatCard dataStatCard={{
                            iconColor: 'color3-pale',
                            iconSrc: '/assets/icons/caloryIcon.svg',
                            stat: userData.data.keyData.calorieCount + 'kCal',
                            label: 'Calories'
                        }} />
                        <StatCard dataStatCard={{
                            iconColor: 'color1-pale',
                            iconSrc: '/assets/icons/proteinIcon.svg',
                            stat: userData.data.keyData.proteinCount + 'g',
                            label: 'Protéines'
                        }} />
                        <StatCard dataStatCard={{
                            iconColor: 'color2-pale',
                            iconSrc: '/assets/icons/glucideIcon.svg',
                            stat: userData.data.keyData.carbohydrateCount + 'g',
                            label: 'Glucides'
                        }} />
                        <StatCard dataStatCard={{
                            iconColor: 'color4-pale',
                            iconSrc: '/assets/icons/lipidIcon.svg',
                            stat: userData.data.keyData.lipidCount + 'g',
                            label: 'Lipides'
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;