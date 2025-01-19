import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProductFilterProvider } from "./context/filteredProducts";

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
        <ProductFilterProvider>
          {children}
        </ProductFilterProvider>
      </body>
    </html>
  );
}
