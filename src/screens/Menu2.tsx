// MenuVertical.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const MenuVertical = () => {
  return (
    <div className="menuVertical">
      <div className="menuItems">
        <Link to="/cadastroCli">
          <button>Cadastro de Usuário</button>
        </Link>
        <div className="buttonContainer">
          <Link to="/cadastroAluno">
            <button>Cadastro de Aluno</button>
          </Link>
          <Link to="/dashboard">
          <button>DashBoard Turma</button>
          </Link>
          <button>Agenda Direção</button>
        </div>
      </div>
    </div>
  );
};

export default MenuVertical;
