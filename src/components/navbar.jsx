import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartcontext"; 

const NavBar = () => {
  const { cartQuantity } = useCart(); 

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#505632",
        fontFamily: "sans-serif",
        width: "100%",
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >

      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Link>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link
          to="/categoria/budines"
          style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
        >
          tartas
        </Link>
        <Link
          to="/categoria/alfajores"
          style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
        >
          alfajores
        </Link>
        <Link
          to="/categoria/cookies"
          style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
        >
          cookies
        </Link>
      </div>

      <Link to="/cart" style={{ textDecoration: "none" }}>
        <CartWidget quantity={cartQuantity} />
      </Link>
    </nav>
  );
};

export default NavBar;