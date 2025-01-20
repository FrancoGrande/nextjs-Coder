'use client'

import React from 'react'
import Image from 'next/image';
import MenuList from './menuList';
import Menu from './menu';
import Link from 'next/link';
import RightMenu from './rightMenu';

const navbar = () => {
    return (
        <>  
            <header className='bg-gray-800 shadow-lg'>
            <nav className='container mx-auto px-4 py-2 flex items-center justify-between'>
                <div className="flex items-center justify-between">
                    <Link href={"/"} ><Image 
                    src={'/elmoLogo.png'}
                    alt="Vercel Logo" 
                    width={100} height={24}
                    /></Link>
                </div>
                <Menu />
                <RightMenu />
            </nav>
            </header>
        </>
    );
};

export default navbar