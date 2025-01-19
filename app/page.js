
import Navbar from "./components/layouts/navbar/navbar";
import Footer from "./components/layouts/footer/footer";
// import ErrorPage from "./pageNotFound/errorPage";
import CategoryPage from "./catalogo/categoryPage";
import Productos from "./productos/page";

export default function Home() {
  return (
    
    <>
    <Navbar />
    {/* <ErrorPage /> */}
    <Productos />
    <Footer />
    </>
  );
}
