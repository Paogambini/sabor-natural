import { useState } from "react";
import { useCart } from "../context/cartcontext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const order = {
      buyer: { name, email, phone },
      items: cart.map(({ id, nombre, precio, quantity }) => ({
        id,
        nombre,
        precio,
        quantity
      })),
      total,
      date: serverTimestamp()
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>✅ ¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  if (cart.length === 0) {
    return <p style={{ textAlign: "center" }}>No tienes productos en el carrito.</p>;
  }

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <h2>Finalizar compra</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.nombre} x {item.quantity} = ${item.precio * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit" style={{ background: "#5a623d", color: "#fff", border: "none", padding: "0.5rem 1rem" }}>
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;