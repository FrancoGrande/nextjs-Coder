"use client"
import {createContext, useState} from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({children}) => {



    const [checkoutData, setCheckoutData] = useState({
        personalInfo: {},
        shippingData: {},
        paymentData: {}
    });


    const updateCheckoutData = (key, data) => {
        setCheckoutData((prev) => ({
        ...prev,
        [key]: data,
        }));
    };



    return (
        <CheckoutContext.Provider value={{ 
            checkoutData, 
            updateCheckoutData,
        }}
    >
            {children}
        </CheckoutContext.Provider>
    )
}