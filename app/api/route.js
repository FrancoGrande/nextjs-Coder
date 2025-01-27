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

export async function PUT(request) {
    return NextResponsse.json({ message: "Hello World" });
}
