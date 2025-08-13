import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./src/firebase.js"; 


const productos = [
  {
    nombre: "Pastafrola",
    precio: 8000,
    stock: 5,
    categoria: "tartas",
    descripcion: "Pastafrola de membrillo, sin azúcar refinada",
    imagen: "https://drive.google.com/uc?export=view&id=1b0zTfzWcGJmSbJZv74EBFSFv51lSjV3y"
  },
  {
    nombre: "Cookies XL",
    precio: 2000,
    stock: 20,
    categoria: "cookies",
    descripcion: "cookies XL, las clasicas estilo New York",
    imagen: "https://drive.google.com/uc?export=view&id=1VwvqtELzgeP7pnpLZXvbWEzTn99euq2q"
  },
   {
    nombre: "Tarta de coco",
    precio: 8000,
    stock: 5,
    categoria: "tartas",
    descripcion: "Tarta rellena con ddl repostero y crumble de coco, sin azúcar refinada",
    imagen: "https://drive.google.com/uc?export=view&id=1BWguvZgH7nD3ygYaGgZOgMBNNkGu_-Rd"
  },
  {
    nombre: "Alfajor de maicena",
    precio: 1500,
    stock: 10,
    categoria: "alfajores",
    descripcion: "Alfajor de maicena relleno con dulce de leche",
    imagen: "https://drive.google.com/uc?export=view&id=1uO0jemTFrnHdzTTgGNwcUKdbyfC0E55m"
  }
];


async function borrarColeccion() {
  const snapshot = await getDocs(collection(db, "productos"));
  const eliminaciones = snapshot.docs.map((docSnap) =>
    deleteDoc(doc(db, "productos", docSnap.id))
  );
  await Promise.all(eliminaciones);
  console.log("Colección 'productos' borrada.");
}

async function insertarProductos() {
  const colRef = collection(db, "productos");
  for (let producto of productos) {
    await addDoc(colRef, producto);
    console.log(`Producto agregado: ${producto.nombre}`);
  }
}

async function seed() {
  await borrarColeccion();
  await insertarProductos();
  console.log("Semillero completado.");
}

seed().catch(console.error);