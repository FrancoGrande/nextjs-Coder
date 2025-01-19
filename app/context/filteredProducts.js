'use client'

import { createContext, useContext, useState } from 'react';

const ProductFilterContext = createContext();

export function ProductFilterProvider({ children }) {
const [selectedCategory, setSelectedCategory] = useState(null);

return (
    <ProductFilterContext.Provider value={{ selectedCategory, setSelectedCategory }}>
    {children}
    </ProductFilterContext.Provider>
);
}

export function useProductFilter() {
const context = useContext(ProductFilterContext);
if (!context) {
    throw new Error('oops se nos escapo elmo, apreta F5!');
}
return context;
}