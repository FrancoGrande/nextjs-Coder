"use client"
import React,{ useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../context/authContext'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../context/config-firebase";


const logIn = () => {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        if(!email || !password) {
            alert("Por favor, completa todos los campos.");
            router.push("/login");
            return;
        }


        try { 
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            setUser(userCredential.user);

            console.log("Iniciando sesión con:", { email, password });
            router.push("/");
            alert("Inicio de sesión exitoso!");


        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Error al iniciar sesión. Por favor, verifica tus credenciales.");
        }



    };
        
    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                Iniciar Sesión
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Correo electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Ingresa tu contraseña"
                />
                </div>

                <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                Iniciar Sesión
                </button>
            </form>
            
            <p className="text-center text-sm text-gray-500 mt-4">
                ¿No tienes cuenta?{" "}
                <a href="/register" className="text-blue-500 hover:underline">
                Regístrate aquí
                </a>
            </p>
            </div>
        </div>
    )
}

export default logIn