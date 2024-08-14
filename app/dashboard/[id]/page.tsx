'use client';
import React from 'react';
import WelcomeText from '@/app/_components/WelcomeText/WelcomeText';
import SideBar from '../components/SideBar/SideBar';
import { USER_MAIN_DATA } from '@/datas/data';
import { USER_ACTIVITY } from '@/datas/data';
import { USER_AVERAGE_SESSIONS } from '@/datas/data';
import StatCard from '../components/StatCard/StatCard';
import MainChart from '../components/MainChart/MainChart';
import CardChart from '../components/CardChart/CardChart';

function Dashboard({ params }: { params: { id: string } }) {
    const { id } = params;
    const CURRENT_USER_DATA = USER_MAIN_DATA.find((user) => user.id === Number(id));
    const CURRENT_USER_ACTIVITY = USER_ACTIVITY.find((user) => user.userId === Number(id));
    if (!CURRENT_USER_DATA) {
        return <div className='not-found'>Pas de données pour cet utilisateur</div>;
    }
    return (
        <div className='Dashboard'>
            <SideBar />

            <div className="contain">

                <WelcomeText dataWelcomeText={{ firstName: CURRENT_USER_DATA?.userInfos.firstName, isSucceed: true }} />

                <div className="charts-and-stats">
                    <div className="charts-zone">
                        <MainChart dataMainChart={{
                            width: 800,
                            height: 400,
                            data: CURRENT_USER_ACTIVITY?.sessions,
                            datakey: 'calories',
                            datakey2: 'kilogram'
                        }} />

                        <div className="card-charts-zone">
                            <CardChart dataCardChart={{
                                width: 400,
                                height: 200,
                                data: USER_AVERAGE_SESSIONS,

                            }} />
                        </div>

                    </div>

                    <div className="stats-zone">
                        <StatCard dataStatCard={{
                            iconColor: 'color3-pale',
                            iconSrc: '/icons/calories.svg', stat: CURRENT_USER_DATA?.keyData.calorieCount + 'kCal',
                            label: 'Calories'
                        }} />
                        <StatCard dataStatCard={{
                            iconColor: 'color1-pale',
                            iconSrc: '/icons/protein.svg', stat: CURRENT_USER_DATA?.keyData.proteinCount + 'g',
                            label: 'Protéines'
                        }} />
                        <StatCard dataStatCard={{
                            iconColor: 'color2-pale',
                            iconSrc: '/icons/carbs.svg', stat: CURRENT_USER_DATA?.keyData.carbohydrateCount + 'g',
                            label: 'Glucides'
                        }} />
                        <StatCard dataStatCard={{
                            iconColor: 'color4-pale',
                            iconSrc: '/icons/lipids.svg', stat: CURRENT_USER_DATA?.keyData.lipidCount + 'g',
                            label: 'Lipides'
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Dashboard;