
import Navbar from "./components/layouts/navbar/navbar";
import Footer from "./components/layouts/footer/footer";
import { redirect } from 'next/navigation';
import Productos from "./pages/productos/page";
import app from "./context/config-firebase";

export default function Home() {
  

  const isProductos =  true;

  if (!isProductos) {

    redirect('/pageNotFound');
}
  return (
    
    <>
    <Navbar />
    <Productos />
    <Footer />
    </>
  );
}
