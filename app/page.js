"use client"
import Navbar from "./components/layouts/navbar/navbar";
import Footer from "./components/layouts/footer/footer";
import { redirect } from 'next/navigation';
import Productos from "./productos/page";
import app from "./context/config-firebase";
import { updateSlugs } from "./context/listaProductos";

export default function Home() {


  const updateSlugs = async () => {
    try {
        const response = await fetch("/api/updateSlug/route", {
            method: "PUT",
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al actualizar slugs:", error);
    }
};

  const isProductos =  true;

  if (!isProductos) {

    redirect('/pageNotFound');
}
  return (
    
    <>
    <Navbar />
    <Productos />
    {/* <button onClick={updateSlugs}>Actualizar Slugs</button>; */}
    <Footer />
    </>
  );
}
