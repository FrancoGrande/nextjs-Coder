
import React from 'react'
import Link from 'next/link'
import { useProductFilter } from '../../../context/filteredProducts'


const menuList = () => {

    const { setSelectedCategory } = useProductFilter();

    function handleCategoryClick(category) {
        setSelectedCategory(category);
    }

    return (
        <div className="md:grid-flow-col	 lg:flex items-center space-x-10">
        <button onClick={() => handleCategoryClick(null)} className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-facebook"></i>Todos</button>
        <button onClick={ () => handleCategoryClick('samsung')} className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-facebook"></i>Samsung</button>
        <button onClick={() => handleCategoryClick('motorola')} className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-instagram"></i>Motorola</button>
        <button onClick={() => handleCategoryClick('zte')} className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-github"></i>ZTE</button>
        <button onClick={() =>handleCategoryClick('xiaomi')} className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-github"></i>Xiaomi</button>
        <button onClick={() =>handleCategoryClick('tcl')} className="font-normal hover:font-bold text-2xl font-semibold"><i className="fab fa-youtube"></i>TCL</button>
        
    </div>
    )
}

export default menuList;