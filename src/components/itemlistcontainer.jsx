const ItemListContainer = ({ mensaje }) => {
  const lineas = mensaje.split('\n');

  return (
    <section style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 80px)',
      width: '100vw',
      fontFamily: 'sans-serif',
      color: '#444',
      textAlign: 'center',
      flexDirection: 'column'
    }}>
      {lineas.map((linea, index) => (
        <h2 key={index} style={{
          fontSize: '2rem',
          fontWeight: '500',
          margin: '5px 0'
        }}>
          {linea}
        </h2>
      ))}
    </section>
  );
};

export default ItemListContainer;

