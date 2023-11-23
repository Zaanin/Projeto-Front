import React from 'react';
import './cadastroCli.css'; // Importe os estilos

interface CadastroProps {
  onSubmit: (dados: CadastroDados) => void;
  dadosFormulario: CadastroDados;
  handleChange: (campo: keyof CadastroDados, valor: string | number) => void;
}

interface CadastroDados {
  nome: string;
  idade: number;
  cpf: string;
  genero: string;
}

const TelaCadastro: React.FC<CadastroProps> = ({
  onSubmit,
  dadosFormulario,
  handleChange,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(dadosFormulario);
  };

  return (
    <div className="tela-cadastro">
      <h2>Cadastro de Presença</h2>
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
            value={dadosFormulario.idade}
            onChange={(e) =>
              handleChange('idade', parseInt(e.target.value, 10))
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

        <button type="submit" className="submit-button">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default TelaCadastro;
