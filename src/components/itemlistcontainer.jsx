import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemlist";
import { getProductos, getProductosByCategoria } from "../data/products";

const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      getProductosByCategoria(categoriaId).then((data) => setItems(data));
    } else {
      getProductos().then((data) => setItems(data));
    }
  }, [categoriaId]);

  return (
    <section
      style={{
        padding: "2rem",
        textAlign: "center",
        minHeight: "calc(100vh - 200px)", 
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      }}
    >
      {saludo &&
        saludo.split("\n").map((linea, i) => (
          <h2
            key={i}
            style={{
              margin: "0.5rem 0",
              color: "#002244",
              fontWeight: 600,
              fontSize: "1.5rem"
            }}
          >
            {linea}
          </h2>
        ))}

      <ItemList items={items} />
    </section>
  );
};

export default ItemListContainer;