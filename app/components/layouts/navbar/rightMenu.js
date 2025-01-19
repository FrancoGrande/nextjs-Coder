import React from 'react'
import Link from 'next/link'

const RightMenu = () => {
  return (
    <div className='flex space-x-10'>
        <Link href="/pageNotFound" className=" font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-youtube"></i>About us</Link>
        <Link href="/contacto" className=" font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-youtube"></i>Contacto</Link>
    </div>
  )
}

export default RightMenu