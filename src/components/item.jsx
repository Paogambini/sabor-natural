import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { nombre, precio, imagen, id } = item;

  return (
    <div
      style={{
        flex: "1 1 250px",        
        maxWidth: "300px",         
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "1rem",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        boxSizing: "border-box"
      }}
    >
      <img
        src={imagen}
        alt={nombre}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "1rem"
        }}
      />
      <h4 style={{ margin: "0 0 0.5rem" }}>{nombre}</h4>
      <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>${precio}</p>

      <div style={{ marginTop: "auto" }}>
        <Link to={`/products/${id}`}>
          <button
            style={{
              background: "#5a623d",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Ver detalle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;