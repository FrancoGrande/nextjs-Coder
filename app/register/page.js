"use client"

import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../context/authContext'

const register = () => {

    const {registerUser} = useContext(AuthContext);

    const [form, setForm] = useState({
        email: "",
        password: "", 
        userName:""});

    const router = useRouter();

      // Manejo del cambio en los inputs
    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const values = {
            email: e.target.email.value,
            password: e.target.password.value,
            userName: e.target.userName.value
        }
        registerUser(values);

        router.push("/login");
        alert("Usuario registrado exitosamente!");
        console.log(values);
    };




        
    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                Registrate
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-600">
                    Nombre
                </label>
                <input
                    type="text"
                    id="userName"
                    value={form.userName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Ingresa tu nombre"
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Correo electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Ingresa tu correo"
                />
                </div>

                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                    Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Ingresa tu contraseña"
                />
                </div>

                <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                Registrame
                </button>
            </form>
            </div>
        </div>
    )
}

export default register