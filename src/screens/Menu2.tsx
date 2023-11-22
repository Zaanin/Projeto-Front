import React from 'react';
import './Menu.css'; // Certifique-se de importar seus estilos corretamente

const MenuVertical = () => {
  return (
    <div className="menuVertical">
      <h1>Menu Vertical</h1>
      <div className="menuItems">
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
        {/* Adicione mais botões conforme necessário */}
      </div>
    </div>
  );
};

export default MenuVertical;
