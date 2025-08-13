import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemlistcontainer";
import ItemDetailContainer from "./components/itemdetailcontainer";
import { Routes, Route } from "react-router-dom";
import CartPage from "./components/cartpage.jsx";
import Checkout from "./components/checkout.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer saludo="Bienvenidos a Sabor Natural, Productos saludables horneados con amor" />
          }
        />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "3rem" }}>
              Página no encontrada
            </h2>
          }
        />
      </Routes>
    </>
  );
}

export default App;