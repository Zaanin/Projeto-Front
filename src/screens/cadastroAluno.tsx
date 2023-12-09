// CadastroAluno.jsx
import React, { useState } from 'react';
import './cadastroAluno.css'; // Certifique-se de importar seus estilos corretamente

const CadastroAluno = () => {
  const [aluno, setAluno] = useState({
    nome: '',
    idade: '',
    cpf: '',
    genero: 'masculino',
    turma: '',
    emailResponsavel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prevAluno) => ({ ...prevAluno, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Aluno cadastrado:', aluno);
    // Adicione a lógica para cadastrar o aluno (por exemplo, enviar para um backend)
  };

  return (
    <div className="cadastro-aluno-container">
      <h2 className="cadastro-aluno-title">Cadastro de Aluno</h2>
      <form className="cadastro-aluno-form" onSubmit={handleSubmit}>
        <label className="cadastro-aluno-label">
          Nome:
          <input type="text" name="nome" value={aluno.nome} onChange={handleChange} className="cadastro-aluno-input" />
        </label>
        <br />
        <label className="cadastro-aluno-label">
          Idade:
          <input type="number" name="idade" value={aluno.idade} onChange={handleChange} className="cadastro-aluno-input" />
        </label>
        <br />
        <label className="cadastro-aluno-label">
          CPF:
          <input type="text" name="cpf" value={aluno.cpf} onChange={handleChange} className="cadastro-aluno-input" />
        </label>
        <br />
        <label className="cadastro-aluno-label">
          Gênero:
          <select name="genero" value={aluno.genero} onChange={handleChange} className="cadastro-aluno-select">
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </label>
        <br />
        <label className="cadastro-aluno-label">
          Turma:
          <input type="text" name="turma" value={aluno.turma} onChange={handleChange} className="cadastro-aluno-input" />
        </label>
        <br />
        <label className="cadastro-aluno-label">
          Email do Responsável:
          <input
            type="email"
            name="emailResponsavel"
            value={aluno.emailResponsavel}
            onChange={handleChange}
            className="cadastro-aluno-input"
          />
        </label>
        <br />
        <button type="submit" className="cadastro-aluno-submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroAluno;
