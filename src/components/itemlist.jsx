import Item from "./item";

const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>cargando productos...</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        padding: "2rem",
        width: "100%",
        minHeight: "calc(100vh - 250px)",
        boxSizing: "border-box",
        justifyContent: "space-evenly",
        flex: 1,
      }}
    >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;