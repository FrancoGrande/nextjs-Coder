"use client"


import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "../context/cartContext";
import Link from "next/link";
import { db } from "../context/config-firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";





export default function PersonalData() {


  const { cart, getTotalPrice, clearCart} = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const total = getTotalPrice();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const order = {
      buyer: data,
      items: cart,
      total: total,
      date: new Date(),
    };

    if (!order.items || order.items.length === 0 || !order.total) {
      alert("La orden no tiene artículos o el total es inválido", "error");
      setIsLoading(false);
      return;
    }

    let refCollection = collection(db, "orders");
    addDoc(refCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });

    order.items.forEach((element) => {
      updateDoc(doc(db, "products", element.id), {
        stock: element.stock - element.quantity,
      });
    });
  };
    

  return (

    <section className="h-dvh grid grid-cols-1">
      {orderId ? (
        <article className="justify-center my-4">
          <div className="justify-self-center">
            <Link href="/" className="btn btn-link">
              Volver
            </Link>
          </div>
          <h2 className="text-xl lg:text-2xl text-center my-2">
            Gracias por tu compra:
          </h2>
          <p className="text-xl lg:text-2xl text-center my-2">
            Esta es tu orden:
          </p>
          <p className="text-xl lg:text-2xl text-center my-2">{orderId}</p>
        </article>
      ) : (
    
    <div className="block justify-center items-center min-h-screen bg-gray-100 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"
      >
        {/* Título y descripción */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Datos personales</h1>
        <p className="text-gray-600 text-center mb-6">Son los datos de quien recibirá la compra.</p>

        {/* Contenedor de los campos en grid */}
        <div className="grid grid-cols-4 gap-4">
          {/* Correo electrónico */}
          <input
            type="email"
            placeholder="Correo electrónico"
            className="col-span-4 border-2 border-gray-300 p-3 rounded-lg text-black"
            required

          />

          {/* Nombre y Apellido */}
          <input
            type="text"
            placeholder="Nombre"
            className="col-span-2 border-2 border-gray-300 p-3 rounded-lg text-black"
            required

          />

          <input
            type="text"
            placeholder="Número de celular"
            className="col-span-2 border-2 border-gray-300 p-3 rounded-lg text-black"
            required

          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center"> Total a pagar:${getTotalPrice()}</h2>


        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 font-semibold hover:bg-blue-600 transition">
            Comprar
        </button>
      </form>



      {/* carrito */}
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
                                <div  >
                                    <h2 className="text-lg font-bold text-black" >{item.title}</h2>
                                    <p className="text-black">Cantidad: {item.quantity}</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold mr-4 text-black">
                                        ${item.price * item.quantity}
                                    </p>

                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">

                    </div>
                </div>

                {/* fin carrito */}
    </div>
          )}
    </section>
  );
}
