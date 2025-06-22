import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemlistcontainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={"Bienvenidos a Sabor Natural\nproductos saludables horneados con amor"} />
    </>
  );
}

export default App;
