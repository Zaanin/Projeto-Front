import React, { useState } from 'react';
import './cadastroCli.css'; // Importe os estilos

interface CadastroProps {
  onSubmit: (dados: CadastroDados) => void;
}

interface CadastroDados {
  nome: string;
  idade: number;
  cpf: string;
  genero: string;
  senha: string;
}

const TelaCadastro: React.FC<CadastroProps> = ({ onSubmit }) => {
  const [cadastradoComSucesso, setCadastradoComSucesso] = useState(false);
  const [dadosFormulario, setDadosFormulario] = useState<CadastroDados>({
    nome: '',
    idade: 0,
    cpf: '',
    genero: '',
    senha: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(dadosFormulario);
    setCadastradoComSucesso(true);
    setDadosFormulario({
      nome: '',
      idade: 0,
      cpf: '',
      genero: '',
      senha: '',
    });
  };

  const handleClosePopup = () => {
    setCadastradoComSucesso(false);
  };

  const handleChange = (campo: keyof CadastroDados, valor: string | number) => {
    setDadosFormulario((prevDados) => ({
      ...prevDados,
      [campo]: valor,
    }));
  };

  return (
    <div className="tela-cadastro">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={dadosFormulario.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
            className="input-field"
          />
        </label>

        <label>
          Idade:
          <input
            type="number"
            value={dadosFormulario.idade >= 0 ? dadosFormulario.idade : ''}
            onChange={(e) =>
              handleChange('idade', e.target.value !== '' ? Math.max(0, parseInt(e.target.value, 10)) : 0)
            }
            className="input-field"
          />
        </label>

        <label>
          CPF:
          <input
            type="text"
            value={dadosFormulario.cpf}
            onChange={(e) => handleChange('cpf', e.target.value)}
            className="input-field"
          />
        </label>

        <label>
          Gênero:
          <select
            value={dadosFormulario.genero}
            onChange={(e) => handleChange('genero', e.target.value)}
            className="input-field"
          >
            <option value="">Selecione...</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </label>

        <label>
          Senha:
          <input
            type="password"
            value={dadosFormulario.senha}
            onChange={(e) => handleChange('senha', e.target.value)}
            className="input-field"
          />
        </label>

        <button type="submit" className="submit-button">
          Cadastrar
        </button>
      </form>

      {cadastradoComSucesso && (
        <div className="popup">
          <p>Cadastrado com sucesso!</p>
          <button onClick={handleClosePopup}>Fechar</button>
        </div>
      )}
    </div>
  );
};

export default TelaCadastro;
