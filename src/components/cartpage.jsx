import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Tu carrito está vacío</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Tu carrito</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #ccc",
            padding: "0.5rem 0",
          }}
        >
          <span>
            {item.nombre} x {item.quantity}
          </span>
          <span>${item.precio * item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}

      <button
        onClick={clearCart}
        style={{
          background: "red",
          color: "#fff",
          padding: "0.5rem 1rem",
          marginTop: "1rem",
          border: "none",
          borderRadius: "5px",
          marginRight: "1rem"
        }}
      >
        Vaciar carrito
      </button>

      <Link to="/checkout">
        <button
          style={{
            background: "#5a623d",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            marginTop: "1rem"
          }}
        >
          Finalizar compra
        </button>
      </Link>
    </div>
  );
};

export default CartPage;