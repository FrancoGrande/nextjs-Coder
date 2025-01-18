'use client'

import {products} from '../mock/products';
import { useState, useEffect } from 'react';


export default function Productos() {

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        setFilteredProducts(products);
    }, []);

    const handleFilter = () => {
        if(selectedCategory){
            const filtered = producto => producto.filter(product => product.category === selectedCategory)
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }
    const handleAddToCart = (product) => {

        console.log(`${product.name} added to cart!`);
    };
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-xl text-gray-800 mb-2">${product.price}</p>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No products found for this category</p>
            )}
        </div>
    );
};

