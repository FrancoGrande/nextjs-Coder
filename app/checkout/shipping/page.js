'use client'

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CheckoutContext } from "../../context/checkoutContext";
import React from "react";

const ShippingPage = () => {
    const router = useRouter();
    const { checkoutData, updateCheckoutData } = useContext(CheckoutContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        updateCheckoutData("shippingData", data);
        router.push("/checkout/payment");
    };
    
return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"
    >
        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Datos de envío</h1>
        <p className="text-gray-600 text-center mb-6">Completa los datos para el envío de tu pedido.</p>

        {/* Contenedor de campos en grid */}
        <div className="grid grid-cols-4 gap-4">
        {/* Provincia */}
        <select
            className="col-span-4 border-4 border-gray-300 p-3 rounded-lg text-black"
            required
            defaultValue={checkoutData.shippingData?.provincia || ''}
        >
            <option value="" disabled selected>Seleccionar provincia</option>
            <option value="buenos-aires">Buenos Aires</option>
            <option value="cordoba">Córdoba</option>
            <option value="santa-fe">Santa Fe</option>
            <option value="chubut">Chubut</option>
        </select>

        {/* Localidad */}
        <select
            className="col-span-4 border-4 border-gray-300 p-3 rounded-lg text-black"
            required
            defaultValue={checkoutData.shippingData?.ciudad || ''}
        >
            <option value="" disabled selected>Seleccionar localidad</option>
            <option value="trelew">Trelew</option>
            <option value="la-plata">La Plata</option>
            <option value="rosario">Rosario</option>
        </select>

        {/* Calle */}
        <input
            type="text"
            placeholder="Calle"
            className="col-span-4 border-4 border-gray-300 p-3 rounded-lg text-black"
            required
            defaultValue={checkoutData.shippingData?.calle || ''}
        />

        {/* Altura y Código postal */}
        <input
            type="text"
            placeholder="Altura"
            className="col-span-2 border-4 border-gray-300 p-3 rounded-l text-black"
            required
            defaultValue={checkoutData.shippingData?.altura || ''}
        />
        <input
            type="text"
            placeholder="Código postal"
            className="col-span-2 border-4 border-gray-300 p-3 rounded-lg text-black"
            required
            defaultValue={checkoutData.shippingData?.CodPostal || ''}
        />
        </div>

        {/* Botón de continuar */}
        <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 font-semibold hover:bg-blue-600 transition"
        >
        Continuar
        </button>
    </form>
    </div>
)
}  

export default ShippingPage;