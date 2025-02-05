"use client"
import React,{ useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext  } from '../context/authContext'
import { signInWithPopup } from "firebase/auth";
import { auth } from "../context/config-firebase";
import Link from 'next/link';





const logIn = () => {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser, googleLogin, registerUser, loginUser } = useContext(AuthContext);


    const handlSubmitGoogle = async (e) => {
        e.preventDefault();
        const userCredencial = await signInWithPopup(auth, email, uid);
        await googleLogin(userCredencial);
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginUser(email, password);
            alert
            router.push("/");
        } catch (error) {
            console.log(error.message);
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
                <button
                type="submit" onClick={googleLogin}
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                Iniciar Sesión con Google
                </button>
            </form>
            
            <p className="text-center text-sm text-gray-500 mt-4">
                ¿No tienes cuenta?{" "}
                <Link href="/register" className="text-blue-500 hover:underline">
                Regístrate aquí
                </Link>
            </p>
            </div>
        </div>
    )
}   

export default logIn;