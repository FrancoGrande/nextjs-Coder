"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchProducts, getProductsByCategory } from "./listaProductos";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Cargar todos los productos al inicio
    useEffect(() => {
        const loadProducts = async () => {
            try {
                const allProducts = await fetchProducts();
                setProducts(allProducts);
                setFilteredProducts(allProducts);
            } catch (error) {
                console.error("Error al cargar productos:", error);
            }
        };

        loadProducts();
    }, []);

    // Filtrar productos cuando se cambia la categoría
    useEffect(() => {
        const filterProducts = async () => {
            if (selectedCategory === null) {
                setFilteredProducts(products);
            } else {
                try {
                    const categoryProducts = await getProductsByCategory(selectedCategory);
                    setFilteredProducts(categoryProducts);
                } catch (error) {
                    console.error("Error al filtrar productos:", error);
                }
            }
        };

        filterProducts();
    }, [selectedCategory, products]);

    return (
        <ProductsContext.Provider
            value={{
                products,
                filteredProducts,
                setSelectedCategory,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);