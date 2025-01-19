'use client'

import { products } from "../../mock/mock";
import { useState } from 'react';
import { useProductFilter } from "../../context/filteredProducts";



export default function Productos() {

    const handleAddToCart = (product) => {

        console.log(`${product.name} added to cart!`);
    };


    const { selectedCategory } = useProductFilter();

    // Filtras los productos por categoría si existe una seleccionada
    const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

    return (
        <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
                        <img src={product.image} alt={product.name} className="w-100 h-80 object-fit rounded-md mb-4 " />
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
    </div>
    );
};

