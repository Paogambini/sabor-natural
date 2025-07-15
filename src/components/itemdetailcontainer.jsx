import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductoById } from "../data/products";
import ItemDetail from "./itemdetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductoById(itemId).then(data => setItem(data));
  }, [itemId]);

  return (
    <div style={{ padding: "2rem" }}>
      {item ? <ItemDetail item={item} /> : <p>Cargando detalle...</p>}
    </div>
  );
};

export default ItemDetailContainer;
