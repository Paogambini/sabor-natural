import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ saludo }) {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = categoriaId
      ? query(productosRef, where("categoria", "==", categoriaId))
      : productosRef;

    getDocs(q)
      .then((snapshot) => {
        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(productos);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, [categoriaId]);

  return (
    <div>
      {saludo && <h2 style={{ textAlign: "center" }}>{saludo}</h2>}
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;