
'use client'
import { useRouter } from "next/navigation";

export default function OrderSummaryPage() {


const router = useRouter();




return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Resumen de compra</h1>

        {/* Sección de datos personales */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div>
            <h2 className="text-lg font-semibold text-gray-700">Datos personales</h2>
            <p className="text-gray-600">Juan Pérez, juan@example.com</p>
        </div>
        <button
            onClick={() => handleEdit(1)}
            className="text-blue-500 hover:underline"
        >
            Editar
        </button>
        </div>

        {/* Sección de datos de envío */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div>
            <h2 className="text-lg font-semibold text-gray-700">Datos de envío</h2>
            <p className="text-gray-600">Calle Falsa 123, Buenos Aires</p>
        </div>
        <button
            onClick={() => handleEdit(2)}
            className="text-blue-500 hover:underline"
        >
            Editar
        </button>
        </div>

        {/* Sección de datos de pago */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div>
            <h2 className="text-lg font-semibold text-gray-700">Datos de pago</h2>
            <p className="text-gray-600">Visa **** 1234</p>
        </div>
        <button
            onClick={() => handleEdit(3)}
            className="text-blue-500 hover:underline"
        >
            Editar
        </button>
        </div>

        {/* Botón de confirmación */}
        <button
        onClick={() =>
            router.push("/") &&
            alert("Compra confirmada")}
        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 font-semibold hover:bg-blue-600 transition"
        >
        Confirmar compra
        </button>
    </div>
    </div>
);
}
