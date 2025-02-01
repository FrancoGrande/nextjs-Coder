"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProducts } from "../../context/listaProductos";
import { useProducts} from "../../context/productContext";
import  { useCart} from "../../context/cartContext"

const ProductPage = () => {
    const { slug } = useParams(); // Obtener el ID de la URL
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const allProducts = await fetchProducts();
                const selectedProduct = allProducts.find((p) => p.slug === slug);
                setProduct(selectedProduct);
            } catch (error) {
                console.error("Error cargando producto:", error);
            }
        };

        if (slug) getProduct();
    }, [slug]);

    if (!product) {
        return <p className="text-center">Cargando producto...</p>;
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center  min-h-screen bg-white p-4 w-4/5 box-border">
                <div className=" md:w-1/2 p-4">
                    <img
                        src={product.img}
                        alt={product.title}
                        className=" object-fit rounded-xl max-w-9/10 "
                    />
                </div>
                <div className="md:w-1/2 p-4">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-black">{product.title}</h1>
                        <p className="text-black">{product.description}</p>
                        <p className="text-xl font-bold text-black">${product.price}</p>
                        <button onClick={() => addToCart({...product, quantity:1 })} className=" w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;