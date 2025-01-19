
import Navbar from "./components/layouts/navbar/navbar";
import Footer from "./components/layouts/footer/footer";
// import ErrorPage from "./pageNotFound/errorPage";
import Productos from "./pages/productos/page";

export default function Home() {
  return (
    
    <>
    <Navbar />
    <Productos />
    <Footer />
    </>
  );
}
