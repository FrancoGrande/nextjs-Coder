"use client"



import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CheckoutContext } from "../context/checkoutContext";




export default function PersonalData() {


  const {checkoutData,updateCheckoutData} = useContext(CheckoutContext);
  const router = useRouter();

  

    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      updateCheckoutData("personalInfo", data);
      console.log('datos personales', data)
      router.push("/checkout/shipping");
    };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
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
            defaultValue={checkoutData.personalData?.nombre || ''} 
          />

          {/* Nombre y Apellido */}
          <input
            type="text"
            placeholder="Nombre"
            className="col-span-2 border-2 border-gray-300 p-3 rounded-lg text-black"
            required defaultValue={checkoutData.personalData?.nombre} 
          />
          <input
            type="text"
            placeholder="Apellido"
            className="col-span-2 border-2 border-gray-300 p-3 rounded-lg text-black"
            required defaultValue={checkoutData.personalData?.apellido}
          />

          {/* DNI y Sexo */}
          <input
            type="text"
            placeholder="Número de DNI"
            className="col-span-2 border-2 border-gray-300 p-3 rounded-lg text-black"
            required defaultValue={checkoutData.personalData?.dni}
          />
          <select
            className="col-span-2 border-2 border-gray-300 p-3 rounded-lg text-black"
            required defaultValue={checkoutData.personalData?.genero}
          >
            <option value="" disabled selected>
              Seleccionar sexo
            </option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>

          {/* Fecha de nacimiento y Número de celular */}
          <input
            type="date"
            placeholder="Fecha de nacimiento"
            className="col-span-2 border-2 border-gray-300 p-3 rounded-lg text-black"
            required defaultValue={checkoutData.personalData?.fechaNacimiento}
          />
          <input
            type="text"
            placeholder="Número de celular"
            className="col-span-2 border-2 border-gray-300 p-3 rounded-lg text-black"
            required defaultValue={checkoutData.personalData?.nCelular}
          />
        </div>


        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 font-semibold hover:bg-blue-600 transition">
            Continuar
        </button>

      </form>
    </div>
  );
}
