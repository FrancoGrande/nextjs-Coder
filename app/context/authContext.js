"use client"

import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState} from "react";
import { auth } from "../context/config-firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const registerUser = async (values) => {
        const userCredencial = await createUserWithEmailAndPassword( auth, values.email, values.password, values.userName);
        setUser(userCredencial.user);
    };

    return (
        <AuthContext.Provider value={{ user, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
}