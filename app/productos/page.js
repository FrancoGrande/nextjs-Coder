"use client"

import { useState, useEffect, Suspense } from "react";
import { fetchProducts } from "../context/listaProductos";
import { useProducts } from "../context/productContext";
import Link from "next/link";
import Loading from "./loading";
import Image from "next/image";1



const ProductsPage = () => {

    const { filteredProducts, setSelectedCategory } = useProducts();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }


    const banners = [
        {src: "/banners/tztefan-d.jpg", alt: "zteFan", bgColor: "bg-[#6CB4E4]"},
        {src: "/banners/tclweek-D.jpg", alt: "tclWeek", bgColor: "bg-[#000000]"},
        // {src: "/banners/tuentitime.jpg", alt: "tuenti time", bgColor: "bg-[#6CB4E4]"},
    ]

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [direction, setDirection] = useState("next");
    
    const nextBaner = () => {
        setDirection("next");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }
    
    const prevBaner = () => {
        setDirection("prev");
        setCurrentIndex((prevIndex) => (prevIndex -1 + banners.length) % banners.length);
    }


return (
    <> 
        <Suspense fallback={<Loading />}> 

        <div className={`flex justify-center ${banners[currentIndex].bgColor} gap-12`}>

        <button onClick={prevBaner}><Image
            src={"/left-arrow.png"}
            alt="right-arrow"
            width={50} height={50}/></button>


            <div className="w-full h-96 relative">
            {banners.map((banner, index) => {
            const isActive = currentIndex === index;

                    // ANIMACION MOVIMIENTO DEL BANNER
            const animationClass = (() => {
                if (isActive) return "translate-x-0 opacity-100 z-10";
                if (direction === "next") return index > currentIndex ? "translate-x-full" : "-translate-x-full";
                if (direction === "prev") return index < currentIndex ? "-translate-x-full" : "translate-x-full";
                return "opacity-0";
            })();

            return (
                <Image
                key={index}
                src={banner.src}
                alt={banner.alt}
                width={1280}
                height={400}
                className={`absolute h-full  w-full px-40 transition-transform duration-700 ease-in-out ${animationClass}`}
                />
            );
        })}
                </div>
 {/* falta ver como hacer para que cada banner lleve a la categoria que corresponde */}


        <button onClick={nextBaner}><Image
            src={"/rightArrow.png"}
            alt="right-arrow"
            width={50} height={50}/>
            </button>

        </div>

        {/* lista de categorias en en barra lateral izquieda */}
            <div className="flex justify-center py-10 items-start">
                <div className="grid grid-cols-2 gap-4 bg-white p-6 w-80 rounded-lg shadow-lg">
                    <button onClick={() => handleCategoryClick(null)} className="hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold"><i className="fab fa-facebook"></i>Todos</button>
                    <button onClick={() => handleCategoryClick('samsung')} className=" hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold"><i className="fab fa-facebook"></i>Samsung</button>
                    <button onClick={() => handleCategoryClick('motorola')} className=" hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold"><i className="fab fa-instagram"></i>Motorola</button>
                    <button onClick={() => handleCategoryClick('zte')} className="hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold"><i className="fab fa-github"></i>ZTE</button>
                    <button onClick={() =>handleCategoryClick('xiaomi')} className="hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold"><i className="fab fa-github"></i>Xiaomi</button>
                    <button onClick={() =>handleCategoryClick('tcl')} className=" hover:bg-blue-500 bg-gray-800 hover:bg-blue-500 py-2 px-4 rounded-lg font-normal hover:font-bold text-2xl hover:font-semibold "><i className="fab fa-youtube"></i>TCL</button>
                </div>


        {/* lista de productos mapeando base de datos */}
                <div className="md:grid-flow-col	 lg:flex items-center justify-center space-x-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
                {
                    filteredProducts.map((product) => (
                            <div key={product.slug} className="bg-white border border-gray-300 rounded-lg shadow-lg p-10 w-80">
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