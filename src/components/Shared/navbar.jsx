import Link from 'next/link';
import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { PiChartLine } from "react-icons/pi";
import ActiveLink from './ActiveLink';



const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <nav className="container mx-auto  flex items-center justify-between  px-4 py-4">

                <div>
                    <Link href="/" className="text-2xl font-bold">KeenKeeper</Link>
                </div>

                <div className="flex items-center gap-6">
                    <ActiveLink href="/">
                        <RiHome2Line className="text-xl" />
                        <span>Home</span>
                    </ActiveLink>

                    <ActiveLink href="/timeline">
                        <IoTimeOutline className="text-xl" />
                        <span>Timeline</span>
                    </ActiveLink>

                    <ActiveLink href="/stats">
                        <PiChartLine className="text-xl" />
                        <span>Stats</span>
                    </ActiveLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;