"use client";

import { useCart } from "../context/cartContext";

const CartPage = () => {
    const { cart, getTotalPrice, removeFromCart } = useCart();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p className="text-lg">Tu carrito está vacío.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between items-center border-b py-4"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-gray-600">Cantidad: {item.quantity}</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold mr-4">
                                        ${item.price * item.quantity}
                                    </p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">
                            Total: ${getTotalPrice()}
                        </h2>
                        <button className="bg-green-500 text-white py-2 px-4 rounded mt-4">
                            Proceder al pago
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
