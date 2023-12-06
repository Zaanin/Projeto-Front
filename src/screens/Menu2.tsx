import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Certifique-se de importar seus estilos corretamente

const MenuVertical = () => {
  return (
    <div className="menuVertical">
      <div className="menuItems">
        {/* Adicione a rota ao primeiro botão para ir para a tela de cadastro */}
        <Link to="/cadastroCli">
          <button>Cadastro de Usuário</button>
        </Link>
        <div className="buttonContainer">
          <button>Cadastro de Aluno</button>
          <button>DashBoard Turma</button>
          <button>Agenda Direção</button>
          {/* Adicione mais botões conforme necessário */}
        </div>
      </div>
    </div>
  );
};

export default MenuVertical;
