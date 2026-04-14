import Image from 'next/image';
import React from 'react';
import instagram from '../../../public/assets/instagram.png';
import facebook from '../../../public/assets/facebook.png';
import twitter from '../../../public/assets/twitter.png';
import logo from '../../../public/assets/logo-xl.png';


const Footer = () => {
    return (
        <div className='container mx-auto items-center text-white text-center px-6 bg-[#244d3f]'>
            <div className='pt-16'>
                <Image className='mx-auto' src={logo} alt="KeenKeeper Logo" width={250} height={100} />
                <p className='mt-2'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>

            <div className='mt-6 flex flex-col items-center'>
                <h4>Social Links</h4>
                <div className='flex gap-4 mt-4'>
                    <Image src={instagram} alt="Instagram" width={30} height={30} />
                    
                    <Image src={facebook} alt="Facebook" width={30} height={30} />

                    <Image src={twitter} alt="Twitter" width={30} height={30} />                 
                </div>
            </div>
            
            <div className='my-10 flex justify-between px-8 items-center'>
                <p className='opacity-70'>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex items-center gap-4 opacity-70'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;