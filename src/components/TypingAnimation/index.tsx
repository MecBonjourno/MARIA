import React, { useEffect, useState } from 'react';
import './animations.css';

// Supondo que você tenha um array de strings para as mensagens
const messages = [
  ' Olá, me chamo MARIA, como posso ajudar?',
  'Estou disponível durante as 24 horas do seu dia, 7 dias da semana.',
  'Eu sempre vou entregar saúde e informação, acessível para todos',
  'Consigo te indicar o centro de saúde mais próximo',
  'Consigo me comunicar com você por voz e texto',
  'Posso te auxiliar com dicas do que fazer em situações adversas',
  'Posso te lembrar de tomar seus medicamentos no momento certo',
  'Posso te responder dúvidas de remédios ou contra indicar alimentos alergícos para você',
  // ...adicione mais mensagens conforme necessário
];

const TypingAnimation: React.FC = () => {
  const [visibleMessage, setVisibleMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < messages[messageIndex].length) {
      // Digitar a próxima letra
      setTimeout(() => {
        setVisibleMessage(prev => prev + messages[messageIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // Velocidade de digitação, ajuste conforme necessário
    } else {
      // Esperar um pouco e limpar a mensagem
      setTimeout(() => {
        setVisibleMessage('');
        setCharIndex(0);
        setMessageIndex((messageIndex + 1) % messages.length);
      }, 2000); // Tempo de espera antes de começar a próxima mensagem
    }
  }, [charIndex, messageIndex]);

  return (
    <div className="typing-animation text-4xl font-medium drop-shadow-2xl text-white">
      {visibleMessage}
      <span className="cursor">|</span> {/* O cursor de digitação */}
    </div>
  );
};

export default TypingAnimation;
