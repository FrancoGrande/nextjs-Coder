import {NextResponsse} from "next/server";




export async function GET({ params }) {
    const { id } = params;
    const data = productos.find((producto) => producto.id === id);
    return NextResponsse.json(data);
}

export async function POST(request) {
    return NextResponsse.json({ message: "Hello World" });
}

export async function DELETE(request) {
    return NextResponsse.json({ message: "Hello World" });
}



const generateSlug = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[áàäâ]/g, "a")
        .replace(/[éèëê]/g, "e")
        .replace(/[íìïî]/g, "i")
        .replace(/[óòöô]/g, "o")
        .replace(/[úùüû]/g, "u")
        .replace(/ñ/g, "n")
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
};


export async function PUT(req) {
    try {
        // Obtener todos los productos
        const productsCollection = collection(db, "productos");
        const querySnapshot = await getDocs(productsCollection);

        const updates = querySnapshot.docs.map(async (docSnapshot) => {
            const product = docSnapshot.data();
            const slug = generateSlug(product.title); // Generar slug basado en el título

            // Actualizar el documento en Firestore
            const productRef = doc(db, "productos", docSnapshot.id);
            await updateDoc(productRef, { slug });

            return { id: docSnapshot.id, slug };
        });

        await Promise.all(updates); // Esperar todas las actualizaciones

        return new Response(JSON.stringify({ message: "Slugs actualizados con éxito" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error actualizando slugs:", error);
        return new Response(JSON.stringify({ error: "Error actualizando slugs" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
