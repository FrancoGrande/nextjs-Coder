'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import catalogoList from './catalogoList';

const CategoryPage = () => {

    const router = useRouter();
    const {category} = router
    const [filterProducts, setFilterProducts] = useState([])  


// useEffect(() => {
//     const filteredProducts = products.filter(product => product.category === category)
//     setFilterProducts(filteredProducts)
// }, [category]);

    return (
        <div>
            <h1>categoria</h1>
            <p>aca estarrian los productos</p>
            <catalogoList products={filterProducts} />       
            </div>
    )
}

export default CategoryPage