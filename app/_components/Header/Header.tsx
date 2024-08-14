'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';
const logo = './assets/img/logo.svg';
function Header() {
    const pathname = usePathname();
    const isActive = (path: any) => pathname === path;
    return (
        <header className='Header'>
            <Link className='logo' href="/dashboard">
                <Image src='/assets/img/logo.svg'
                    width={150}
                    height={50}
                    alt="logo SportSee" />
            </Link>
            <nav>
                <Link className={isActive('/dashboard') ? 'active' : ''} href="/dashboard">Accueil</Link>
                <Link className={isActive('/profile') ? 'active' : ''} href="/profile"> Profil</Link>
                <Link className={isActive('/settings') ? 'active' : ''} href="/settings">Réglages</Link>
                <Link className={isActive('/community') ? 'active' : ''} href="/community">Communauté</Link>
            </nav>
        </header>
    );
}

export default Header;