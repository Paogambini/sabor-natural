import { useState } from "react";
import { useCart } from "../context/cartcontext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { nombre, precio, imagen, descripcion, stock } = item;
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart({ ...item, quantity });
    setAdded(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img src={imagen} alt={nombre} style={{ width: "300px", borderRadius: "8px" }} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p style={{ fontWeight: "bold" }}>${precio}</p>
      {added ? <p>Producto agregado al carrito ✅</p> : <ItemCount stock={stock} onAdd={handleAdd} />}
    </div>
  );
};

export default ItemDetail;
