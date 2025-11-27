function fusionarCatalogos(a, b) {
    try {
        // Validamos que sean arreglos
        if (!Array.isArray(a) && !Array.isArray(b)) {
            throw new Error("Ambos parámetros deben ser arreglos");
        }

        // 2. Fusionar con spread sin modificar los originales
        const nuevoCatalogo = [...a, ...b];

        // 3. Ordenar por precio ascendente
        const [ ...precio ] = nuevoCatalogo;
        console.log(precio);
        console.log(nuevoCatalogo);
        // const catalogoOrdenado = nuevoCatalogo.sort((x, y) => x.precio - y.precio);

        return catalogoOrdenado;

    } catch (error) {
        console.error("Error al fusionar catálogos:", error.message);
        return null;
    }
}


const catalogoA = [
    { id: 1, nombre: "Curso JavaScript", precio: 40 },
    { id: 2, nombre: "Curso HTML", precio: 35 }
];

const catalogoB = [
    { id: 3, nombre: "Curso CSS", precio: 30 }
];

const resultado = fusionarCatalogos(catalogoA, catalogoB);
console.log(resultado);

