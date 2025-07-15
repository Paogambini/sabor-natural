import React, { useState } from 'react';

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button
        onClick={() => onAdd(cantidad)}
        style={{ marginTop: '0.5rem' }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
