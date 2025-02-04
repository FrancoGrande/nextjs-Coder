"use client"
import {createContext, useState} from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({children}) => {

    const [ currentStep, setCurrentStep ] = useState(1);

    const [personalInfo, setPersonalInfo] = useState({});
    const [shippingData, setShippingData] = useState({});
    const [paymentData, setPaymentData] = useState({});

    return (
        <CheckoutContext.Provider value={{        currentStep,
            setCurrentStep,
            personalInfo,
            setPersonalInfo,
            shippingData,
            setShippingData,
            paymentData,
            setPaymentData
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}