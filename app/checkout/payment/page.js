'use client'

import React from 'react'
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CheckoutContext } from "../../context/checkoutContext";




const PaymentPage = () => {

    const router = useRouter();
    const { checkoutData, updateCheckoutData } = useContext(CheckoutContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        updateCheckoutData("paymentData", data);

        
        router.push("/checkout/summary");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"
    >
        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Datos de pago</h1>
        <p className="text-gray-600 text-center mb-6">Ingresa los datos de tu tarjeta para procesar el pago.</p>


        <div className="grid grid-cols-4 gap-4">
        {/* Número de tarjeta */}
        <input
            type="text"
            placeholder="Número de tarjeta"
            className="col-span-4 border-4 border-gray-300 p-3 rounded-lg text-black"
            required
            defaultValue={checkoutData.paymentData?.tarjeta || ''}
            maxLength={16} // Límite típico para números de tarjeta
        />

        {/* Nombre del titular */}
        <input
            type="text"
            placeholder="Nombre del titular"
            className="col-span-4 border-4 border-gray-300 p-3 rounded-lg text-black"
            required
            defaultValue={checkoutData.paymentData?.nombreTitularTarjeta || ''}
        />

        {/* Fecha de expiración y CVV */}
        <input
            type="month"
            placeholder="Fecha de expiración"
            className="col-span-2 border-4 border-gray-300 p-3 rounded-lg text-black"
            required
            defaultValue={checkoutData.paymentData?.fechaExpiracion || ''}
        />
        <input
            type="text"
            placeholder="CVV"
            className="col-span-2 border-4 border-gray-300 p-3 rounded-lg text-black"
            required
            defaultValue={checkoutData.paymentData?.cvv || ''}
            maxLength={4}
        />
        </div>

        {/* Botón de confirmar compra */}
        <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 font-semibold hover:bg-blue-600 transition text-black"
        >
        Confirmar compra
        </button>
    </form>
    </div>
    )
}

export default PaymentPage