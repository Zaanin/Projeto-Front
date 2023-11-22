import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Visualizar.css';

interface Mensagem {
  texto: string;
  tipo: string;
}

export function Visualizar() {
  const chatMensagemRef = useRef<HTMLDivElement>(null);
  const params  = useParams();
  const [enviandoComoAtendente, setEnviandoComoAtendente] = useState(true);
  const [mensagemInput, setMensagemInput] = useState('');
  const [mensagens, setMensagens] = useState([
    { texto: 'Fala chefia', tipo: 'recebida' },
    { texto: 'Me vê uma coquinha geladinha', tipo: 'recebida' },
    { texto: 'Opa, fala meu guri', tipo: 'enviada' },
    { texto: 'É pa ja patrão', tipo: 'enviada' },
  ]);
  const alternarTipoMensagem = () => {
    setEnviandoComoAtendente(!enviandoComoAtendente);
  };

  const verificarEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      enviarMensagem();
    }
  };

  const enviarMensagem = () => {
    if (mensagemInput.trim() !== '') {
      const novaMensagem: Mensagem = {
        texto: mensagemInput,
        tipo: enviandoComoAtendente ? 'enviada' : 'recebida',
      };

      setMensagens([...mensagens, novaMensagem]);
      setMensagemInput('');
    }
  };

  useEffect(() => {
    // Rolar automaticamente para a última mensagem quando as mensagens mudarem
    if (chatMensagemRef.current) {
      chatMensagemRef.current.scrollTop = chatMensagemRef.current.scrollHeight;
    }
  }, [mensagens]);

  return (
    <div className="chat-geral">
      <div className="chat-header">
        <h1>Seja bem-vindo<br/> {params.Nome}</h1>
        <button
          className="botao-alternar"
          type="button"
          onClick={alternarTipoMensagem}
        >
          {enviandoComoAtendente
            ? 'Alternar para Cliente'
            : 'Alternar para Atendente'}
        </button>
      </div>
      <div className="chat-mensagem" ref={chatMensagemRef}>
        {mensagens.map((mensagem, index) => (
          <div key={index} className={`mensagem ${mensagem.tipo}`}>
            <p>{mensagem.texto}</p>
          </div>
        ))}
      </div>
      <div className="mensagem-input-conteiner">
        <input
          type="text"
          className="mensagem-input"
          placeholder="Solta o verbo chefia..."
          value={mensagemInput}
          onChange={(e) => setMensagemInput(e.target.value)}
          onKeyDown={verificarEnter}
        />
        <button
          className="botao-enviar"
          type="button"
          onClick={enviarMensagem}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
