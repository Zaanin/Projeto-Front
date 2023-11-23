import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Visualizar } from '../screens/visualizar2';
import Menu from '../screens/Menu2';
import TelaCadastro from '../screens/cadastroCli';

export function Router() {
  // Estado para armazenar os dados do formulário
  const [dadosFormulario, setDadosFormulario] = React.useState({
    nome: '',
    idade: 0,
    cpf: '',
    genero: '',
  });

  // Função que será chamada quando o formulário for submetido
  const handleCadastroSubmit = (dados) => {
    // Lógica para lidar com os dados do formulário
    console.log('Dados do formulário:', dados);
    // Pode adicionar lógica para enviar os dados para o servidor, etc.
    // Exemplo: api.post('/cadastrar', dados)
  };

  // Função para atualizar o estado conforme os campos do formulário são alterados
  const handleChange = (campo, valor) => {
    setDadosFormulario((prevDados) => ({ ...prevDados, [campo]: valor }));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu2" element={<Menu />} />
      <Route path="/visualizar2/:Nome" element={<Visualizar />} />
      {/* Passar a função onSubmit e os dados do formulário ao usar TelaCadastro */}
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
    </Routes>
  );
}
