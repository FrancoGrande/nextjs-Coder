import React from 'react'
import Link from 'next/link'
import { useCart } from '../../../context/cartContext';


const RightMenu = () => {
  const { cart } = useCart();
  
  return (
    <div className='flex space-x-10'>
        <Link href="/about" className=" font-normal hover:font-bold text-2xl font-regular"><i className="fab fa-youtube"></i>About us</Link>
        <Link href="/contacto" className=" font-normal hover:font-bold text-2xl font-regular"><i className="fab fa-youtube"></i>Contacto</Link>
        <Link href="/login" className=" font-normal hover:font-regular text-2xl font-regular"><i className="fab fa-youtube"></i>Ingresar</Link>
        <Link href="/register" className=" font-normal hover:font-bold text-2xl font-regular"><i className="fab fa-youtube "></i>Registrarse</Link>
        <Link href="/cart">
        <Link href="/cart" className="text-2xl">🛒 ({cart.length})</Link>
            </Link>
    </div>
  )
}

export default RightMenu



// nota: no hice la pagina About Us para que se vea pagina 404