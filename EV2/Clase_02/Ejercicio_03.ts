

interface Producto{
    id: number;
    nombre: string;
    precio: number;
}

function actualizarProducto(producto: Producto, cambios: Partial<Producto>): Producto {
    return { ...producto, ...cambios };
}

const productoOriginal: Producto = {
    id: 1,
    nombre: "Camiseta",
    precio: 20
};

const productoActualizado = actualizarProducto