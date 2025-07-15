import ItemCount from "./itemcount";

const ItemDetail = ({ item }) => {
  const onAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} ${item.nombre} al carrito`);
  };

  return (
    <div style={{
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img src={item.imagen} alt={item.nombre} style={{ width: '200px', borderRadius: '1rem' }} />
      <div>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p><strong>${item.precio}</strong></p>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
