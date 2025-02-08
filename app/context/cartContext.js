"use client"

import { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Verificar si el producto ya está en el carrito
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                // Si ya existe, actualizamos la cantidad
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                // Si no existe, lo agregamos con cantidad inicial
                return [...prevCart, { ...product, quantity: product.quantity || 1 }];
            }
        });
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        let filteredCart = cart.filter((item) => item.id !== productId);
        setCart(filteredCart);
    };

    // Función para obtener el precio total del carrito
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Proveer las funciones y el estado a los componentes
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);