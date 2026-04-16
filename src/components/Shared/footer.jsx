import Image from 'next/image';
import React from 'react';
import instagram from '../../../public/assets/instagram.png';
import facebook from '../../../public/assets/facebook.png';
import twitter from '../../../public/assets/twitter.png';
import logo from '../../../public/assets/logo-xl.png';


const Footer = () => {
    return (
        <div className='container mx-auto items-center text-white text-center px-6 bg-[#244d3f]'>

            {/* Logo and Description */}
            <div className='pt-12 md:pt-16'>
                <Image
                    className='mx-auto' src={logo} 
                    alt="KeenKeeper Logo" width={200} 
                    height={50} style={{ height: 'auto' }}
                />
                <p className='mt-4 max-w-lg mx-auto text-sm md:text-base opacity-90'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
            </div>

            {/* Social Links */}
            <div className='mt-8 flex flex-col items-center'>
                <h4 className='font-medium'>Social Links</h4>
                <div className='flex gap-6 mt-4'>
                    <Image src={instagram} className="hover:opacity-80 cursor-pointer" alt="Instagram" width={28} height={28} />
                    <Image src={facebook} className="hover:opacity-80 cursor-pointer" alt="Facebook" width={28} height={28} />
                    <Image src={twitter} className="hover:opacity-80 cursor-pointer" alt="Twitter" width={28} height={28} />
                </div>
            </div>

            {/* Copyright and Links */}
            <div className='mt-12 mb-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 border-t border-white/10 pt-8 px-4 md:px-8'>
                <p className='text-sm opacity-70 order-2 md:order-1'>
                    © 2026 KeenKeeper. All rights reserved.
                </p>

                <div className='flex flex-wrap justify-center gap-4 md:gap-6 text-sm opacity-70 order-1 md:order-2'>
                    <p className="hover:underline cursor-pointer">Privacy Policy</p>
                    <p className="hover:underline cursor-pointer">Terms of Service</p>
                    <p className="hover:underline cursor-pointer">Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;