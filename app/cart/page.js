"use client";

import { useCart } from "../context/cartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
    const { cart, getTotalPrice, removeFromCart } = useCart();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/checkout");
    };
    

    return (
        <div className="p-4" >
            <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p className="text-lg">Tu carrito está vacío.</p>
            ) : (
                <div  className="flex items-center justify-between bg-white p-4 border-b border-black ">
                    <ul>
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center space-x-4 space-between mb-8"
                            >
                                <div className="flex items-center space-x-8 space-between mb-8 p-4 ">
                                <div className="relative w-16 h-16 border border-dashed rounded-xl overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        layout="fill" // Hace que la imagen se ajuste al contenedor
                                        objectFit="cover" // Ajusta la imagen para que se recorte proporcionalmente
                                        />
                                    </div>
                                <div class >
                                    <h2 className="text-lg font-bold text-black" >{item.title}</h2>
                                    <p className="text-black">Cantidad: {item.quantity}</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold mr-4 text-black">
                                        ${item.price * item.quantity}
                                    </p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">
                            Total: ${getTotalPrice()}
                        </h2>
                        <button
                            onClick={handleSubmit}
                            className="bg-green-500 text-white py-2 px-4 rounded mt-4">
                            Proceder al pago
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
