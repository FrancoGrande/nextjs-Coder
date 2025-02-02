"use client"

import { createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { createContext, useState} from "react";
import { auth } from "../context/config-firebase";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({
        email: null,
        uid: null
    });

    const registerUser = async (values) => {
    try {
        const userCredencial = await createUserWithEmailAndPassword( auth, values.email, values.password, values.userName);
        const user = userCredencial.user;
        setUser({
            email: user.email,
            uid: user.uid
        });

    } catch (error) {
            console.log("error al registar el usuario",error);
        }
    };


    const loginUser = async (email, password) => {
        try {
          // Intentar iniciar sesión con Firebase
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
            // Establecer el usuario en el contexto
            setUser(userCredential.user);
        
            console.log("Usuario autenticado:", userCredential.user);
            return { success: true };
            } catch (error) {
            // Manejar errores específicos de autenticación
            console.error("Error al iniciar sesión:", error);
        
            if (error.code === "auth/user-not-found") {
                throw new Error("Usuario no encontrado. Verifica tu correo.");
            } else if (error.code === "auth/wrong-password") {
                throw new Error("Contraseña incorrecta. Intenta nuevamente.");
            } else {
                throw new Error("Ocurrió un error inesperado. Intenta nuevamente.");
            }
            }
        };

    const googleLogin = async () => {
        await signInWithPopup(auth, googleProvider);
    }

    return (
        <AuthContext.Provider value={{ user, registerUser, googleLogin, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
}