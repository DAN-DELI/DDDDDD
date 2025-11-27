// Catálogos iniciales
const catalogoA = [
  { id: 1, nombre: "Curso JavaScript", precio: 40 },
  { id: 2, nombre: "Curso HTML", precio: 35 }
];

const catalogoB = [
  { id: 3, nombre: "Curso CSS", precio: 30 }
];

// Función para fusionar y ordenar con Insertion Sort
function fusionarCatalogos(a, b) {
  try {
    if (!Array.isArray(a) && !Array.isArray(b)) {
      throw new Error("Ambos parámetros deben ser arreglos");
    }

    // Fusionar con spread
    const nuevoCatalogo = [...a, ...b];

    // Algoritmo de inserción
    for (let i = 1; i < nuevoCatalogo.length; i++) {
      let actual = nuevoCatalogo[i];
      let j = i - 1;

      // Mover elementos mayores hacia la derecha
      while (j >= 0 && nuevoCatalogo[j].precio > actual.precio) {
        nuevoCatalogo[j + 1] = nuevoCatalogo[j];
        j--;
      }
      // Insertar el elemento en la posición correcta
      nuevoCatalogo[j + 1] = actual;
    }

    return nuevoCatalogo;

  } catch (error) {
    console.error("Error al fusionar catálogos:", error.message);
    return [];
  }
}

// Ejemplo de uso
const catalogoFinal = fusionarCatalogos(catalogoA, catalogoB);
console.log(catalogoFinal);
