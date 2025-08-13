import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import ItemDetail from "./itemdetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No existe el producto");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchItem();
  }, [itemId]);

  return (
    <div style={{ padding: "2rem" }}>
      {item ? <ItemDetail item={item} /> : <p>Cargando detalle...</p>}
    </div>
  );
};

export default ItemDetailContainer;