import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      cursor: 'pointer'
    }}>
      <FaShoppingCart size={20} color="#fff" />
      <span style={{
        fontWeight: 'bold',
        color: '#fff'
      }}>3</span>
    </div>
  );
};

export default CartWidget;
