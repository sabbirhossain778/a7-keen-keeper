'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveLink = ({href, children}) => {
    const pathname = usePathname();
    // console.log(pathname);
    
    const isActive = pathname === href;
    return (
        <Link href={href} className={`btn flex items-center gap-2 transition-all ${isActive? 'bg-[#244d3f] text-white font-bold' : 'btn-ghost' }`}>
            {children}
        </Link>
    );
};

export default ActiveLink;