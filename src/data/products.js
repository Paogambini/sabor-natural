import pepas from "../assets/pepas.jpeg";
import alfajor from "../assets/alfajor.jpeg";
import limon from "../assets/limon.jpeg";

const productos = [
  {
    id: "1",
    nombre: "pepas integrales",
    categoria: "integrales",
    precio: 3000,
    imagen: pepas,
  },
  {
    id: "2",
    nombre: "Alfajor de Maicena",
    categoria: "comunes saludables",
    precio: 1000,
    imagen: alfajor,
  },
  {
    id: "3",
    nombre: "Budín de Limón",
    categoria: "comunes saludables",
    precio: 4500,
    imagen: limon,
  },
];


export function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
}


export function getProductosByCategoria(categoriaId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.categoria === categoriaId));
    }, 500);
  });
}


export function getProductoById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      if (producto) {
        resolve(producto);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 500);
  });
}
