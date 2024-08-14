import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

function SideBar() {
    const menuItems = [{ src: '/assets/icons/activityIcon.svg', alt: 'Activité' }, { src: '/assets/icons/cyclingItem.svg', alt: 'Cyclisme' }, { src: '/assets/icons/swimmingIcon.svg', alt: 'Natation' }, { src: '/assets/icons/weightliftingIcon.svg', alt: 'Fitness' }];
    return (
        <div className='SideBar'>
            <div className="menu-items-zone">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} dataMenuItem={item} />
                ))}
            </div>
            <div className="copyright">
                Copiryght, SportSee 2020
            </div>
        </div>
    );
}

export default SideBar;