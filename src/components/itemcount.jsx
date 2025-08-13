import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={decrease} disabled={count <= 1}>-</button>
        <span style={{ margin: "0 1rem" }}>{count}</span>
        <button onClick={increase} disabled={count >= stock}>+</button>
      </div>
      <button
        onClick={() => onAdd(count)}
        style={{
          background: "#5a623d",
          color: "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;