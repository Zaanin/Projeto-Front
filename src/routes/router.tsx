// Router.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Visualizar } from '../screens/visualizar2';
import MenuVertical from '../screens/Menu2'; // Verifique se está importando o MenuVertical corretamente
import CadastroAluno from '../screens/cadastroAluno';
import TelaCadastro from '../screens/cadastroCli';
import TelaDash from '../screens/dashboard';

export function Router() {
  const [dadosFormulario, setDadosFormulario] = React.useState({
    nome: '',
    idade: 0,
    cpf: '',
    genero: '',
  });

  const handleCadastroSubmit = (dados) => {
    console.log('Dados do formulário:', dados);
  };

  const handleChange = (campo, valor) => {
    setDadosFormulario((prevDados) => ({ ...prevDados, [campo]: valor }));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu2" element={<MenuVertical />} />
      <Route path="/visualizar2/:Nome" element={<Visualizar />} />
      <Route
        path="/cadastroCli"
        element={
          <TelaCadastro
            onSubmit={handleCadastroSubmit}
            dadosFormulario={dadosFormulario}
            handleChange={handleChange}
          />
        }
      />
      <Route path="/cadastroAluno" element={<CadastroAluno />} />
      <Route path="/dashboard" element={<TelaDash/>} />
    </Routes>
  );
}
