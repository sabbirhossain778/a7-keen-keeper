import Link from 'next/link';
import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { PiChartLine } from "react-icons/pi";
import ActiveLink from './ActiveLink';
import { ContactProvider } from '@/context/ContactContext';
import Image from 'next/image';
import NavIcon from '../../../public/assets/logo.png'


const Navbar = () => {
    return (
        // <div className='bg-base-100 shadow-sm'>
        //     <nav className="container mx-auto  flex items-center justify-between  px-4 py-4">

        //         <div>
        //             <Link href="/" className="text-2xl font-bold">
        //             <Image src={NavIcon} alt='Nav-Icon' />
        //             </Link>
        //         </div>

        //         <div className="flex items-center gap-4">
        //             <ActiveLink href="/">
        //                 <RiHome2Line className="text-xl" />
        //                 <span className='text-[18px]'>Home</span>
        //             </ActiveLink>

        //             <ActiveLink href="/timeline">
        //                 <IoTimeOutline className="text-xl" />
        //                 <span className='text-[18px]'>Timeline</span>
        //             </ActiveLink>

        //             <ActiveLink href="/stats">
        //                 <PiChartLine className="text-xl" />
        //                 <span className='text-[18px]'>Stats</span>
        //             </ActiveLink>
        //         </div>
        //     </nav>
        // </div>

        <div className='bg-base-100 shadow-sm sticky top-0 z-50'>
            <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                <div className="shrink-0">
                    <Link href="/" className="block">
                        <Image src={NavIcon} alt='Nav-Icon' width={150}
                        className="sm:w-30 h-auto" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-2 md:gap-4">
                    <ActiveLink href="/">
                        <RiHome2Line className="text-xl md:text-2xl" />
                        <span className='hidden md:block text-[18px]'>Home</span>
                    </ActiveLink>

                    <ActiveLink href="/timeline">
                        <IoTimeOutline className="text-xl md:text-2xl" />
                        <span className='hidden md:block text-[18px]'>Timeline</span>
                    </ActiveLink>

                    <ActiveLink href="/stats">
                        <PiChartLine className="text-xl md:text-2xl" />
                        <span className='hidden md:block text-[18px]'>Stats</span>
                    </ActiveLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;