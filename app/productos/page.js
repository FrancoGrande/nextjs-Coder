"use client"

import { useState, useEffect, Suspense } from "react";
import { fetchProducts } from "../context/listaProductos";
import { useProducts } from "../context/productContext";
import Link from "next/link";
import Loading from "./loading";



const ProductsPage = () => {

    const { filteredProducts, setSelectedCategory } = useProducts();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }


return (
    <> 
        <Suspense fallback={<Loading />}> 
        <div className="bg-gray-100 p-40 ">
            <h1 className="text-4xl font-bold text-gray-900">Banner</h1>
        </div>
            <div className="flex justify-center pt-10 items-start">
                <div className="md:grid-flow-col	 lg: bg-white flex flex-wrap items-center justify-between space-x-10 p-10 m-10 w-96 m-4">
                    <button onClick={() => handleCategoryClick(null)} className="hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold"><i className="fab fa-facebook"></i>Todos</button>
                    <button onClick={ () => handleCategoryClick('samsung')} className=" hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold"><i className="fab fa-facebook"></i>Samsung</button>
                    <button onClick={() => handleCategoryClick('motorola')} className="m-2 hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold"><i className="fab fa-instagram"></i>Motorola</button>
                    <button onClick={() => handleCategoryClick('zte')} className="hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold"><i className="fab fa-github"></i>ZTE</button>
                    <button onClick={() =>handleCategoryClick('xiaomi')} className="hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold"><i className="fab fa-github"></i>Xiaomi</button>
                    <button onClick={() =>handleCategoryClick('tcl')} className=" hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold "><i className="fab fa-youtube"></i>TCL</button>
                </div>
                <div className="md:grid-flow-col	 lg:flex items-center justify-center space-x-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {
                    filteredProducts.map((product) => (
                            <div key={product.slug} className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
                                <img src={product.img} alt={product.title} className="w-100 h-80 object-fit rounded-md mb-4 " />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                                <p className="text-xl text-gray-800 mb-2 pb-4">${product.price}</p>
                                <Link href={`/productos/${product.slug}`} className=" hover:hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl font-semibold">
                                    Ver detalles
                                </Link>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        </Suspense>
    </>
);
};

export default ProductsPage;