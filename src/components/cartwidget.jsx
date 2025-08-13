import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({ quantity }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        cursor: "pointer",
        padding: "0.3rem 0.6rem",
        backgroundColor: "#6a7345",
        borderRadius: "8px",
        color: "#fff",
      }}
    >
      <FaShoppingCart size={20} />
      <span style={{ fontWeight: "bold" }}>{quantity}</span>
    </div>
  );
};

export default CartWidget;