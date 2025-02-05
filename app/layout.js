import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProductsProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";
import Navbar from "./components/layouts/navbar/navbar";
import Footer from "./components/layouts/footer/footer";
import { AuthProvider } from "./context/authContext";
import { CheckoutProvider } from "./context/checkoutContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata= {
  title: 'ELMOvil',
  description: 'ELMOvil tienda de celulares de plaza sesamo',
  keywords: "Ecommerce, elmo, plaza sesamom celulares"
}

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <ProductsProvider>
              <CheckoutProvider>
                <Navbar />
                  {children}
                <Footer />
              </CheckoutProvider>
            </ProductsProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
