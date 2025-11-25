function procesarCompra(cliente, productos) {
    const { nombre: nombreCliente, correo } = cliente;
    const { nombre: nombreProducto, precio } = productos;

    try {
        if (!nombreCliente || !correo || !nombreProducto || precio <= 0) {
            throw new Error("Datos no válidos");
        }

        console.log("Compra procesada correctamente:", nombreCliente, nombreProducto, precio);

    } catch (error) {
        console.error("La información no es válida. Por favor validar los valores.", error.message);
    } finally {
        console.log("Finalizando proceso...");
    }
}

const cliente = {
    nombre: "Dan",
    correo: "juasjuas@gmail.com"
};

const productos = {
    nombre: "Televisor",
    precio: 2000000
};

procesarCompra(cliente, productos);
