import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./config-firebase";

// Función para obtener productos desde Firestore
export const fetchProducts = async () => {
try {
    // Referencia a la colección "productos" en Firestore
    const productsCollection = collection(db, "productos");
    // Obtiene los documentos de la colección
    const querySnapshot = await getDocs(productsCollection);
    // Mapea los documentos en un array de productos
    const products = querySnapshot.docs.map((doc) => ({
    id: doc.id, 
    ...doc.data(),
    }));

    return products;
} catch (error) {
    console.error("Error al obtener los productos: ", error);
    throw new Error("No se pudieron obtener los productos");
}
};


    export const getProductsByCategory = async (category) => {
    try {
        const productsCollection = collection(db, "productos");
        const q = query(productsCollection, where("category", "==", category));
        const productsSnapshot = await getDocs(q);

        return productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        }));
    } catch (error) {
        console.error("Error filtrando productos por categoría:", error);
        throw new Error("No se pudieron filtrar los productos");
    }
};