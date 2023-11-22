import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

interface Nome {
  nome: string;
}

interface Senha {
  senha: string;
}

export function Home() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState<Nome[]>([]);
  const [senha, setSenha] = useState('');
  const [senhas, setSenhas] = useState<Senha[]>([]);

  function handleAddNome(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const stateNomes = [...nomes];
    const stateSenhas = [...senhas];

    const criarNome: Nome = {
      nome: nome,
    };

    const criarSenha: Senha = {
      senha: senha,
    };

    stateNomes.push(criarNome);
    stateSenhas.push(criarSenha);

    // Chame a função handleNavigate e passe o estado necessário (stateNomes ou stateSenhas)
    handleNavigate(stateNomes);

    setNomes(stateNomes);
    setSenhas(stateSenhas);
    setNome('');
    setSenha('');
  }

  function handleNavigate(stateNomes: Nome[]) {
    navigate(`/menu2`, { state: { nomes: stateNomes } });
  }

  return (
    <div className="bodyHome">
      <div className="quadradoBranco">
        <h1>Login</h1>
        <form onSubmit={handleAddNome}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
