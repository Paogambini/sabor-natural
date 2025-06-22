import CartWidget from "./cartwidget";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#505632',
      fontFamily: 'sans-serif',
      width: '100%',
    }}>
      <img
        src={logo}
        alt="Logo Sabor Natural"
        style={{
         height: '50px',
         width: '50px',
         borderRadius: '50%',
         objectFit: 'cover',
         }}
       />


      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#fff' }}>Inicio</a>
        <a href="#" style={{ textDecoration: 'none', color: '#fff' }}>Productos</a>
        <a href="#" style={{ textDecoration: 'none', color: '#fff' }}>Contacto</a>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;

