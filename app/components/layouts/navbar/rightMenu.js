import React from 'react'
import Link from 'next/link'
import { useCart } from '../../../context/cartContext';


const RightMenu = () => {
  const { cart } = useCart();
  
  return (
    <div className='flex space-x-10'>
        <Link href="/pageNotFound" className=" font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-youtube"></i>About us</Link>
        <Link href="/contacto" className=" font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-youtube"></i>Contacto</Link>
        <Link href="/cart">
                Carrito ({cart.length})
            </Link>
    </div>
  )
}

export default RightMenu