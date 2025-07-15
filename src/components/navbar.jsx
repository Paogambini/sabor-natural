import CartWidget from "./cartwidget";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
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
        position: "sticky", // opcional: se queda arriba al hacer scroll
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
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

      {/* Menú de navegación */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link
          to="/categoria/budines"
          style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
        >
          Budines
        </Link>
        <Link
          to="/categoria/alfajores"
          style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
        >
          Alfajores
        </Link>
        <Link
          to="/categoria/cookies"
          style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
        >
          Cookies
        </Link>
      </div>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;

