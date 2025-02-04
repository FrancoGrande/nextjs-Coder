"use client";
import react, { useContext } from "react";
import { checkoutContext } from "../../../context/checkoutContext";


const stepLayout = () => {

    const steps = [
        {step: 1, label: "datos personales", icon:"👤"},
        {step: 2, label: "datos de envio", icon:"🚚"},
        {step: 3, label: "metodo de pago", icon:"💳"},
        {step: 4, label: "resumen de compra", icon:"📝"},
    ]

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">


    <div className="flex items-center justify-center py-4 bg-white shadow-md">
        {steps.map(({ step, label, icon }) => (
        <div key={step} className="flex flex-col items-center mx-4">
            <div
            className={`w-12 h-12 flex items-center justify-center rounded-full border-4 ${
                currentStep === step
                ? "border-blue-500 bg-blue-100"
                : currentStep > step
                ? "border-green-500 bg-green-100"
                : "border-gray-300"
            }`}
            >
            {icon}
            </div>
            <span className={`mt-2 text-sm ${currentStep === step ? "font-bold text-blue-500" : "text-gray-600"}`}>
            {label}
            </span>
        </div>
        ))}
    </div>

    {/* Contenido dinámico */}
    <main className="flex-grow flex justify-center items-center">{children}</main>
    </div>
    )
}

export default stepLayout