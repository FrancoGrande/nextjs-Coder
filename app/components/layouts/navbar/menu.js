'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import MenuList from './menuList';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    return (
        <>
        <div onClick={handleOpen} >
        <Image className= 'lg:hidden' 
            src={'/menuBurger.png'}
            alt="Vercel Logo" 
            width={100} height={24}
            />
            <aside>
            <MenuList Open={isOpen} handleClose={handleClose} />
            </aside>
        </div>
        </>
    )
}

export default Menu;