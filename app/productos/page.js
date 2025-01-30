"use client"

import { useState, useEffect, Suspense } from "react";
import { fetchProducts } from "../context/listaProductos";
import { useProducts } from "../context/productContext";
import Link from "next/link";
import Loading from "./loading";



const ProductsPage = () => {

    const { filteredProducts } = useProducts();



return (
    <> 
        <Suspense fallback={<Loading />}> 
            <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {
                filteredProducts.map((product) => (
                        <div key={product.slug} className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
                            <img src={product.img} alt={product.title} className="w-100 h-80 object-fit rounded-md mb-4 " />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                            <p className="text-xl text-gray-800 mb-2">${product.price}</p>
                            <Link href={`/productos/${product.slug}`} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                                Ver detalles
                            </Link>
                        </div>
                    ))
                }
                </div>
            </div>
        </Suspense>
    </>
);
};

export default ProductsPage;