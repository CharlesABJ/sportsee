import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface DataMenuItem {
    src: any;
    alt: string;
}

function MenuItem({ dataMenuItem }: { dataMenuItem: DataMenuItem }) {
    return (
        <Link href="#" className='MenuItem'>
            <Image src={dataMenuItem.src}
                width={30}
                height={30}
                alt={dataMenuItem.alt} />
        </Link>
    );
}

export default MenuItem;