import React from 'react'
import Link from 'next/link'

const menuList = ({open, handleClose}) => {



    return (
        <div className="md:grid-flow-col	 lg:flex items-center space-x-10">
        <Link href="/categoria/todo" className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-facebook"></i>Todos</Link>
        <Link href="/categoria/samsung" className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-facebook"></i>Samsung</Link>
        <Link href="/categoria/motorola" className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-instagram"></i>Motorola</Link>
        <Link href="/categoria/zte" className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-github"></i>ZTE</Link>
        <Link href="/categoria/tcl" className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-youtube"></i>TCL</Link>
        <Link href="/contacto" className=" font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-youtube"></i>Contacto</Link>
    </div>
    )
}

export default menuList;